function generateRandomArray(size, min, max) {
    const arr = [];
    for (let i = 0; i < size; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      arr.push(randomNumber);
    }
    return arr;
  }
  
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  function displayArray(arr) {
    console.log("Array:", arr);
  }
  
  const size = 20;
  const min = 1;
  const max = 100;
  const randomArray = generateRandomArray(size, min, max);
  const sortedArray = sortArray(randomArray);
  displayArray(sortedArray);
  