# Array Rotation
***
## Introduction
Array rotation is a common problem in computer science, <br/>
 where we need to shift each element of an array to the left or right.
  This is often used to create a circular array or to reorganize the data in an array. 

## Overview
The problem we are trying to solve is to perform left rotation on an array. Given an array of integers and a number `k`, we need to rotate the array `k` times to the left.

## Source
This solution is implemented in C++ and was sourced from HackerRank.

## Algorithm
The algorithm for performing left rotation on an array is as follows:

1. Store the first element of the array in a temporary variable.
2. Shift all other elements of the array one position to the left.
3. Replace the last element of the array with the temporary variable.
4. Repeat steps 1-3 k times.


## solution
```
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

```

## Time complexity
The time complexity of this algorithm is `O(n*k)`, where `n` is the size of the array and `k` is the number of rotations to perform.

## Conclusion

In this project, we have explored the problem of performing left rotation on an array. <br/>
We have looked at the algorithm to solve this problem, and implemented a solution in C++. This solution has a time complexity of `O(n*k)`,  <br/>
where `n` is the size of the array and `k` is the number of rotations to perform.






