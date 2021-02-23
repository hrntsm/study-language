#include <iostream>

class Glass
{
    int nakami;
public:
    Glass():nakami(10){}
    void dasu(){nakami -=2;}
};

int main()
{
    Glass glass;
    std::cout << "コップ glass を作りました。" << std::endl;
    std::cout << "glass から水を出します" << std::endl;
    glass.dasu();
    std::cout << "END" << std::endl;
}