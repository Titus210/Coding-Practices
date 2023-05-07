#include <iostream>
using namespace std;

#define MAX 5

void rotateLeft(int *array, int size)
{
    int temp = array[0];
    for (int i = 0; i < size - 1; i++)
    {
        array[i] = array[i + 1];
    }
    array[size - 1] = temp;
}

int main()
{
    // declare array
    int array[MAX];
    // declare pointers
    int i, times_rotated;

    // insert elements to array
    for (i = 0; i < MAX; i++)
    {
        cout << "Enter Element " << i + 1 << ": ";
        cin >> array[i];
    }
    cout << "Enter times to rotate: " << endl;
    cin >> times_rotated;

    cout << "Before:" << endl;
    // print elements in array
    for (i = 0; i < MAX; i++)
    {
        cout << "Element " << i + 1 << " is: " << array[i] << endl;
    }

    // rotate array left by one position per call
    for (int i = 1; i <= times_rotated; i++)
    {
        rotateLeft(array, MAX);
    }

    // print elements in array
    cout << "After:" << endl;
    for (i = 0; i < MAX; i++)
    {
        cout << "Element " << i + 1 << " is: " << array[i] << endl;
    }

    return 0;
}
