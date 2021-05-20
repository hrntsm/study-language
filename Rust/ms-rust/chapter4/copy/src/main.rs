fn process(_input: u32) {}

fn caller() {
    let n = 1u32;
    process(n);
    process(n);
}

fn str_process(_str: String){}

fn str_caller() {
    let str = String::from("Hello");
    str_process(str.clone());
    str_process(str);
}

fn main() {
    caller();
    str_caller();
}
