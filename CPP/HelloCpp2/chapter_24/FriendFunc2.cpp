#include <iostream>
using namespace std;

class Age;

class Name
{
    char *name;
public:
    friend void print(Name &, Age &);
    Name(char *name)
    {
        Name::name = name;
    }
} n_obj("Rena") ;

class Age
{
    int age;
public:
    friend void print(Name &, Age &);
    Age(int age)
    {
        Age::age = age;
    }
} a_obj(15) ;

void print(Name &n, Age &a)
{
    cout << "name : " << n.name << "\t age : " << a.age << '\n';
}

int main()
{
    print(n_obj, a_obj);
    return 0;
}
