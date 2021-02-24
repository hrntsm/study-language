// cpp has bool type, regarding c which does not have bool type.
#include <iostream>
using namespace std;

int main(){
    bool b1 = true, b2 = false, b3 = 0;
    if (b1 && (b2 || ++b3)){
        cout << "Kitty on your lap";
    }
    return 0;
}
