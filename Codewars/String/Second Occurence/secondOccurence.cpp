#include <iostream>
using namespace std;

// main function
int main(){
	// initialize variables
	int count = 0, i;
	string word  = "Hello World";
	int wordLength  = word.length();
	char letter = 'l';

	//loop through string
	for(i = 0; i <= wordLength; i++){
		// check if count == 2 and letter == string[i]
		if (word[i] == letter){
			count++;
		}
		if (word[i] == letter && count == 2){
			cout << i;
		}
	}
	return 0;
}
