#include <iostream>

int main()
{
    int *po;
    po = new int;

    *po = 100;
    std::cout << "動的に割り当てたメモリ内容 = " << *po;

    delete po;
    return 0;
}
