#include <iostream>
using namespace std;

class Base
{
public:
    char *name;
};

class Derived1 : virtual public Base
{
public:
    int age;
};

class Derived2 : virtual public Base
{
public:
    char *sex;
};

class Derived3 : public Derived1, public Derived2
{
public:
    void print()
    {
        cout << "name : " << name;
        cout << "\tage : " << age;
        cout << "\tsex : " << sex << '\n';
    }
} obj;

int main()
{
    obj.name = "Kitty";
    obj.age = 13;
    obj.sex = "Woman";
    obj.print();
    return 0;
}
