#include <iostream>
using namespace std;

/* cpp can omit void
 * if c, you write below
 * void func(void);
 * */
void func();

void func(){
    cout << "Kitty on your lap";
}

int main() {
    func();
    return 0;
}