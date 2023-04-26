#include <string>

int secondSymbol(const std::string& str, char symbol) {
  
  int count = 0, i;
	int wordLength  = str.length();

	//loop through string
	for(i = 0; i <= wordLength; i++){
		// check if count == 2 and letter == string[i]
		if (str[i] == symbol){
			count++;
		}
		if (str[i] == symbol && count == 2){
			return i;
      break;
		}
	}
    return -1;
  }
