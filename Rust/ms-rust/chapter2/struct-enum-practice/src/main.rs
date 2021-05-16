struct Car {
    color: String,
    transmission: Transmission,
    convertible: bool,
    mileage: u32,
}

#[derive(PartialEq, Debug)]
enum Transmission {
    Manual,
    SemiAuto,
    Automatic,
}

fn car_factory(_color: String, _transmission: Transmission, _convertible: bool) -> Car {
    let car: Car = Car {
        color: _color,
        transmission: _transmission,
        convertible: _convertible,
        mileage: 0
    };

    assert_eq!(car.mileage, 0);

    if car.convertible {
        println!("New car = {}, {:?}, Convertible", car.color, car.transmission);
    } else {
        println!("New car = {}, {:?}, Hardtop", car.color, car.transmission);
    }

    return car;
}

fn main() {
    let client_request_1 = car_factory(String::from("Red"), Transmission::Manual, false);
    assert_eq!(client_request_1.color, "Red");
    assert_eq!(client_request_1.transmission, Transmission::Manual);
    assert_eq!(client_request_1.convertible, false);

    let client_request_2 = car_factory(String::from("Silver"), Transmission::Automatic, true);
    assert_eq!(client_request_2.color, "Silver");
    assert_eq!(client_request_2.transmission, Transmission::Automatic);
    assert_eq!(client_request_2.convertible, true);

    let client_request_3 = car_factory(String::from("Yellow"), Transmission::SemiAuto, false);
    assert_eq!(client_request_3.color, "Yellow");
    assert_eq!(client_request_3.transmission, Transmission::SemiAuto);
    assert_eq!(client_request_3.convertible, false);
}
