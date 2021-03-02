#include <iostream>
using namespace std;

class Kitty {
public:
    int func(int x) {
        return x + (int)(x * 0.05);
    }
} obj;

int main(){
    cout << obj.func(100);
    return 0;
}
