#include <iostream>

class Test1
{
public:
    virtual void func()
    {
        std::cout << "Kitty on your lap\n";
    }
    ~Test1()
    {
        this->func();
    }
};

class Test2 : public Test1
{
public:
    void func()
    {
        std::cout << "Tokyo mew mew\n";
        Test1::func();
    }
} obj;

int main()
{
    return 0;
}
