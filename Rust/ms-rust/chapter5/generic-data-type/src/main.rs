struct Point1<T> {
    x: T,
    y: T,
}

struct Point2<T, U> {
    x: T,
    y: U,
}

fn main() {
    let _boolean = Point1 { x: true, y: false };
    let _integer = Point1 { x: 1, y: 9 };
    let _float = Point1 { x: 1.7, y: 4.3 };
    let _string_slice = Point1 { x: "high", y: "low" };
    // let wont_work = Point1 { x: 25, y: true };

    let _integer_and_boolean = Point2 { x: 5, y: false };
    let _float_and_string = Point2 { x: 1.0, y: "hey" };
    let _integer_and_float = Point2 { x: 10, y: 30 };
    let _both_integer = Point2 { x: 10, y: 30 };
    let _both_boolean = Point2 { x: true, y: true};
}
