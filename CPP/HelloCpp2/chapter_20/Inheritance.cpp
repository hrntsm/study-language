#include<iostream>
using namespace std;

class Kitty{
public:
    void nyan(){cout << "Kitty on your lap\n";}
};

class Di_Gi_Gharat : public Kitty{
public:
    void nyo(){cout << "Di Gi Gharat\n";}
} obj;

int main(){
    obj.nyo();
    obj.nyan();
    return 0;
}
