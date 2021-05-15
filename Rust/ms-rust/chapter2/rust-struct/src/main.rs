fn main() {
    let person = Person {
        name: String::from("Adam"),
        likes_oranges: true,
        age: 25,
    };

    let _origin = Point2D(0, 0);

    let _unit = Unit;

    if person.likes_oranges {
        println!("{:?} is {:?} and likes oranges.", person.name, person.age);
    } else {
        println!("{:?} is {:?} and doesn't likes oranges.", person.name, person.age);
    }
}

struct Person {
    name: String,
    age: u8,
    likes_oranges: bool,
}

struct Point2D(u32, u32);

struct Unit;
