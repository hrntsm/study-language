#[derive(Debug)]
struct Highlight<'document>(&'document str);

fn erase(_: String) {}

fn main() {
    let x;
    {
        let y = 42;
        x = &y;
    }
    // ↓では x が参照している y のライフタイムが切れているのでコンパイルエラー
    // println!("x: {}", x);

    let magic1 = String::from("abracadabra!");
    let magic2 = String::from("shazam!");

    let result = longest_word(&magic1, &magic2);
    println!("The longest magic word is {}", result);

    let text = String::from("The quick brown fox jumps over the lazy dog.");
    let fox = Highlight(&text[4..19]);
    let dog = Highlight(&text[35..43]);
    println!("{:?}", fox);
    println!("{:?}", dog);

    erase(text);

    println!("{:?}", fox);
    println!("{:?}", dog);
}

fn longest_word<'a>(x: &'a String, y: &'a String) -> &'a String {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
