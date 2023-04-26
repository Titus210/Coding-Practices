# Course Registration
***
## Introduction
This program is designed to solve a problem in which we need to determine if a group of friends can enroll in a course with a maximum capacity of students,
 given that some students have already enrolled.

 ## Description
 The program takes three integers as input: N, M, and K. N represents the number of friends, 
 M represents the maximum capacity of the course, and K represents the number of students already enrolled in the course. 
 The program outputs "Yes" if it is possible for all N friends to enroll in the course, otherwise it outputs "No".

 ## Type
 This program is a console application.

 ## Algorithm
 1. Declare an array and an integer variable to hold the values of N, M, and K.
 2. Find the maximum number of students that can enroll in the course by adding N and K.
 3. Find the remaining capacity in the course by subtracting the maximum number of students from the maximum capacity of the course.
 4. If the remaining capacity is greater than or equal to zero, output "Yes". Otherwise, output "No".

## Conclusion
This program provides a solution to the problem of determining if a group of friends can enroll in a course with a maximum capacity of students, 
given that some students have already enrolled. The algorithm used in the program is simple and efficient,
 and can be easily modified to handle different input values. The program is written in C and can be compiled and run on any system that supports the language.