#include <iostream>

class Glass
{
    int nakami;
public:
    Glass():nakami(10){}
    void dasu();
};

void Glass::dasu() {
    nakami -= 2;
    std::cout << "output water." << std::endl;
    std::cout << "cup no nakami " << nakami << " desu" << std::endl;
};

int main()
{
    Glass glass;
    std::cout << "コップ glass を作りました。" << std::endl;
    std::cout << "glass から3回水を出します" << std::endl;
    glass.dasu();
    glass.dasu();
    glass.dasu();
    std::cout << "END" << std::endl;
}