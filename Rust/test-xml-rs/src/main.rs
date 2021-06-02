mod stb;

fn main() {
    let read_path = String::from("file_in.stb");
    let write_path = String::from("file_out.stb");
    stb::read(&read_path);
    stb::write(&write_path);
}
