fn main() {
    let _number: i32 = "42".parse().expect("Not number!");
    // let _number_err = "42".parse().expect("Not number!");

    let _x = 2.0; // f64 がデフォルト
    let _y: f32 = 3.0; // f32 にしたい場合は指定する。最新のCPUでf32でもf64も速度はほぼ同じ
    println!("1 + 2 = {}", 1u32 + 2);
    println!("1 - 2 = {}", 1i32 - 2);
    println!("9 / 2 = {}", 9u32 / 2);
    println!("9 / 2 = {}", 9.0 / 2.0);
    println!("3 * 6 = {}", 3 * 6);

    let is_bigger = 1 > 4;
    println!("{}", is_bigger);

    let mut hello = String::from("Hello, ");
    hello.push('w');
    hello.push_str("orld!");

    println!("{}", hello);

    let tuple = ("hello", 5, 'c');

    assert_eq!(tuple.0, "hello");
    assert_eq!(tuple.1, 5);
    assert_eq!(tuple.2, 'c');

    println!("{}", tuple.0);
}
