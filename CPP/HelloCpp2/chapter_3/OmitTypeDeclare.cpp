struct S_TAG {
    int i;
};

union U_TAG {
    int i;
    double d;
};

enum E_TAG {A, B, C};

int main(){
    S_TAG s_obj;
    U_TAG u_obj;
    E_TAG e_obj;
    return 0;
}
