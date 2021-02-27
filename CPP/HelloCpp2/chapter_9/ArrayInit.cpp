#include <iostream>
using namespace std;

class Kitty {
public:
    int nam;
} obj[10];

int main(){
    for (int i = 0; i < 10; i++) {
        obj[i].nam = i;
        cout << obj[i].nam << '\n';
    }
    return 0;
}
