mod stb;

fn main() {
    let read_path: String = String::from("file_in.stb");
    let write_path: String = String::from("file_out.stb");
    let stb_data: Vec<String> = stb::read(&read_path);
    stb::write(&write_path, stb_data);
}
