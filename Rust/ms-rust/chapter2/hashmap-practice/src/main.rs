use std::collections::HashMap;

fn fruit_basket() -> HashMap<String, u32> {
    let mut basket: HashMap<String, u32> = HashMap::new();
    basket.insert(String::from("banana"), 2);
    basket.insert(String::from("orange"), 2);
    basket.insert(String::from("apple"), 2);

    basket
}

fn main() {
    let basket = fruit_basket();
    assert!(
        basket.len() >= 3,
        "basket must have at least three types of fruits"
    );
    assert!(
        basket.values().sum::<u32>() >= 5,
        "basket must have least five fruits"
    );
}
