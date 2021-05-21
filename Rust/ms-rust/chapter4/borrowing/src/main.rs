fn main() {
    let mut greeting = String::from("Hello");
    print_greeting(&greeting);
    print_greeting(&greeting);

    change(&mut greeting);
}

fn print_greeting(message: &String) {
    println!("Greeting: {}", message);
}

fn change(message: &mut String) {
    message.push_str("!");
    print_greeting(message);
}