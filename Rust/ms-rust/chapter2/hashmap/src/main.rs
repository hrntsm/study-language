fn main() {
    use std::collections::HashMap;

    let mut book_reviews: HashMap<String, String> = HashMap::new();

    book_reviews.insert(
        "Adventures of Huckleberry Finn".to_string(),
        "My favorite book.".to_string(),
    );
    book_reviews.insert("Grimms' Fairy Tales".to_string(), "Masterpiece".to_string());

    println!("Review for Jane: {}", book_reviews["Adventures of Huckleberry Finn"]);
}
