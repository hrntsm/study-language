#include<iostream>
using namespace std;

class Kitty 
{
public:
    ~Kitty() { cout << "Kitty on your lap\n" ; }
};

class Nekoneko_Zoo : public Kitty
{
public:
    ~Nekoneko_Zoo() { cout << "Nekoneko_Zoo\n" ; }
} obj ;

int main() 
{
    return 0;
}
