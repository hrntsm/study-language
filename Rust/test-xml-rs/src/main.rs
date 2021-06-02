extern crate xml;

use std::fs::File;
use std::io::{self, BufReader, Write};

use xml::reader::{EventReader, XmlEvent};
use xml::writer::{EmitterConfig, EventWriter, Result};

fn indent(size: usize) -> String {
    const INDENT: &'static str = "    ";
    (0..size)
        .map(|_| INDENT)
        .fold(String::with_capacity(size * INDENT.len()), |r, s| r + s)
}

fn read_stb(path: &String) {
    let file = File::open(path).unwrap();
    let file = BufReader::new(file);

    let parser = EventReader::new(file);
    let mut depth = 0;
    for e in parser {
        match e {
            Ok(XmlEvent::StartElement {
                name, attributes, ..
            }) => {
                println!("{}+{}", indent(depth), name);
                if attributes.len() > 0 {
                    for attr in attributes {
                        println!("{}  +attr: {}", indent(depth), attr.name);
                    }
                }
                depth += 1;
            }
            Ok(XmlEvent::EndElement { name }) => {
                depth -= 1;
                println!("{}-{}", indent(depth), name);
            }
            Err(e) => {
                println!("Error: {}", e);
                break;
            }
            _ => {}
        }
    }
}

fn write_stb(path: &String) {
    let mut file = File::create(path).unwrap();

    let mut input = io::stdin();
    let mut output = io::stdout();

    //TODO: input の STB を書き出せるようにする。今は CLI でのインプットまち
    let mut writer = EmitterConfig::new()
        .perform_indent(true)
        .create_writer(&mut file);
    loop {
        print!(">");
        output.flush().unwrap();
        let mut line = String::new();
        match input.read_line(&mut line) {
            Ok(0) => break,
            Ok(_) => match handle_event(&mut writer, line) {
                Ok(_) => {}
                Err(e) => panic! {"Write error: {}", e},
            },
            Err(e) => panic!("Input error: {}", e),
        }
    }
}

fn handle_event<W: Write>(w: &mut EventWriter<W>, line: String) -> Result<()> {
    let line = line.trim();
    let event: xml::writer::XmlEvent = if line.starts_with("+") && line.len() > 1 {
        xml::writer::XmlEvent::start_element(&line[1..]).into()
    } else if line.starts_with("-") {
        xml::writer::XmlEvent::end_element().into()
    } else {
        xml::writer::XmlEvent::Characters(&line).into()
    };
    w.write(event)
}

fn main() {
    let read_path = String::from("file_in.stb");
    let write_path = String::from("file_out.stb");
    read_stb(&read_path);
    write_stb(&write_path);
}
