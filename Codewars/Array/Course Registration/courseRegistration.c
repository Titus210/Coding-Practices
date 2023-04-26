#include <stdio.h>
/*
* There is a group of  N friends who wish to enroll in a course together. The course has a maximum capacity of 
* M students that can register for it. If there are K other students who have already enrolled in the course, determine if it will still be possible for all the N friends to do so or not.
*/
int main(){
	// declare array and int to hold values
	int N = 2, M = 50, K = 27; // no of friends, maximum in course, already enrolled
	int T[3] = {N,M,K};
	int max = 0, remaining = 0;


	// Find maximum no of students in course
	max = T[0] + T[2];
	// find the difference of  max people to enroll and max student already enrolled
	remaining = T[1] - max;

	// check if remaining is greater 0 to print that students can enroll
	if(remaining >= 0)
		printf("Yes");
	else
		printf("No");
}
