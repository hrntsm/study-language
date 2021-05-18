fn main() {
    let fruits = vec!["banana", "apple", "coconut", "orange", "strawberry"];

    let first = fruits.get(0);
    println!("{:?}", first);

    let third = fruits.get(2);
    println!("{:?}", third);

    let non_existent = fruits.get(99);
    println!("{:?}", non_existent);

    for &index in [0, 2, 99].iter() {
        match fruits.get(index) {
            Some(&"coconut") => println!("Coconuts are awesome!!"),
            Some(fruit_name) => println!("It's a delicious {}!", fruit_name),
            None => println!("There is no fruit! :("),
        }
    }

    let some_number: Option<u8> = Some(7);
    match some_number {
        Some(7) => println!("That's my lucky number!"),
        _ => {},
    }

    if let Some(7) = some_number {
        println!("That's my lucky number!!!!")
    }

    // let gift = Some("candy");
    // assert_eq!(gift.unwrap(), "candy");

    // let empty_gift: Option<&str> = None;
    // assert_eq!(empty_gift.unwrap(), "candy");

    let a = Some("value");
    assert_eq!(a.expect("fruits are healthy"), "value");

    let b: Option<&str> = None;
    b.expect("fruits are healthy");
}
