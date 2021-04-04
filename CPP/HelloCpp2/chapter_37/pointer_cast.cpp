#include <iostream>
using namespace std;

int main()
{
    unsigned int var = 4294967295, *po;

    char *cpo = reinterpret_cast<char *>(&var);
    po = reinterpret_cast<unsigned int *>(cpo);

    cout << "char * = " << *cpo << '\n';
    cout << "int * = " << *po << '\n';

    return 0;
}