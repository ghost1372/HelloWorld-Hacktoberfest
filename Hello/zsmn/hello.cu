#include<bits/stdc++.h>
using namespace std;

#define N 256

__global__ void myKernel(){
    printf("Hello!\n");
}

int main(){
    myKernel<<<1, N>>>(result);
    cudaThreadSynchronize();

    return 0;
}
