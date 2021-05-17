fn main() {
    let three_numbers = vec![1, 2, 3];
    println!("Initial vector: {:?}", three_numbers);

    let ten_zeroes = vec![0; 10];
    println!("Ten zeroes: {:?}", ten_zeroes);

    let mut new_v = Vec::new();
    new_v.push(5);
    new_v.push(6);
    new_v.push(7);
    new_v.push(8);
    println!("Current vector is {:?}", new_v);

    let mut pop_vec = vec![1, 2, 3];
    pop_vec.pop();
    println!("Current vector is {:?}", pop_vec); 
}
