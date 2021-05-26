/// This function divides two numbers.
/// 
/// # Example #1: 10 / 2 = 5
/// 
/// ```
/// let result = doctests_exercise::div(10, 2);
/// assert_eq!(result, 5)
/// ```
/// 
/// # Example #2: 6 / 2 = 3
/// 
/// ```
/// let result = doctests_exercise::div(6, 2);
/// assert_eq!(result, 3)
/// ```
/// 
/// # Panics
/// 
/// The function panics if the second argument is zero.
/// 
/// ```rust,should_panic
/// let result = doctests_exercise::div(1, 0);
/// ```
pub fn div(a: i32, b: i32) -> i32 {
    if b == 0 {
        panic!("Divide-by-zero error");
    }
    a / b
}