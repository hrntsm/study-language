#include <iostream>

class Glass
{
public:
    int nakami;
    Glass(int x):nakami(x){}
    void dasu(int);
};

void Glass::dasu(int x) {
    if (nakami >= x) {
        nakami -= x;
        std::cout << "output water." << std::endl;
        std::cout << "cup no nakami " << nakami << " desu" << std::endl;
    } else {
        std::cout << "sonnnani mizu arimasenn" << std::endl;
        std::cout << "genzai no koppu niha " << nakami << " dake desu" << std::endl;
    }
}

int main()
{
    int x;
    int y = 0;
    std::cout << "mizu no ryou" << std::endl;
    std::cin >> x;
    Glass glass(x);
    std::cout << "コップ glass を作りました。" << std::endl;
    while (glass.nakami > y) {
        std::cout << "glass から水を出します" << std::endl;
        std::cin >> y;
        glass.dasu(y);
    }
    std::cout << "nokori ha " << glass.nakami << " ika desita" << std::endl;
    std::cout << "END" << std::endl;
}