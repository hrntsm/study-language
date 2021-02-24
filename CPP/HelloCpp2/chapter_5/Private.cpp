#include <iostream>
using namespace std;

class Kitty {
private:
    int point;
public:
    void setPoint(int i);
    int getPoint(int i);
};

void Kitty::setPoint(int i) {
    point = i;
}

int Kitty::getPoint(int i) {
    point += i;
    return point;
}

int main(){
    Kitty obj;
    obj.setPoint(0);
    for (int i = 0; i < 10; ++i) {
        cout << obj.getPoint(i) << "\n";
    }
    return 0;
}
