#include <iostream>
using namespace std;

int main()
{
    // create array to hold no of problems and practice per week
    int noOfProb[4] = {}, pract_per_week[4] = {0};
    int i, count = 0;

    for (i =0; i <= 3; i++){
        cin >> noOfProb[i];
    }
    /*
    * loop through no of problems practiced per week
    */
    for(i = 0;  i <  4; i++)
    {
        if (noOfProb[i] >= 10)
        {
            pract_per_week[i] = 1;
        }
    }
    /*
   * loop through practice per week to check if its one
    */
    for(i = 0; i < 4; i++)
    {
        if(pract_per_week[i] == 1)
        {
            count += 1;
        }
    }

    cout<< count;
    return 0;
}
