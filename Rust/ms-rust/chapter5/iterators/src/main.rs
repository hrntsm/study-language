#[derive(Debug)]
struct Counter {
    length: usize,
    count: usize,
}

impl Counter {
    fn new(length: usize) -> Counter {
        Counter {
            count: 0,
            length,
        }
    }
}

impl Iterator for Counter {
    type Item = usize;

    fn next(&mut self) -> Option<Self::Item> {
        self.count += 1;
        if self.count <= self.length {
            Some(self.count)
        } else {
            None
        }
    }
}

fn main() {
    let mut counter = Counter::new(6);
    println!("Counter just created: {:#?}", counter);

    assert_eq!(counter.next(), Some(1));
    assert_eq!(counter.next(), Some(2));
    assert_eq!(counter.next(), Some(3));
    assert_eq!(counter.next(), Some(4));
    assert_eq!(counter.next(), Some(5));
    assert_eq!(counter.next(), Some(6));
    assert_eq!(counter.next(), None);
    assert_eq!(counter.next(), None);
    assert_eq!(counter.next(), None);

    println!("Counter exhausted: {:#?}", counter);

    for number in Counter::new(10) {
        println!("{}", number);
    }
}
