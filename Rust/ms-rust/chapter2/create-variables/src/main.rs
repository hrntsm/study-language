fn main() {
    let a_number = 10;
    let a_boolean = true;

    println!("The number is {}.", a_number);
    println!("The boolean is {}.", a_boolean);

    // デフォルトではイミュータブルなので以下みたく再代入できない
    // a_number = 15;
    
    // これなら再代入できる
    let mut a_string = "string1";
    println!("THe string is {}", a_string);
    a_string = "string2";
    println!("THe string is {}", a_string);
}
