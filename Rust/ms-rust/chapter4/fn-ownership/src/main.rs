fn process(input: String) {}

fn caller() {
    let s = String::from("Hello, world!");
    process(s);
    process(s);
}

fn main() {
    caller();
}
