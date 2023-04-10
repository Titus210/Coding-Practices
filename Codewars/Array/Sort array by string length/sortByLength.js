// holds [array item, size]
let newArray = [];


function sortByLength(array) {
    for (var i = 0; i < array.length; i++) {
        // get size of string in array
        size = array[i].length;

        // push array item and size to new array in a multidimensional form
        newArray.push([array[i], size]);
    }
};

var array = ["Telescopes", "Glasses", "Eyes", "Monocles"];
sortByLength(array);


console.log("Original Array ");
console.log(array);

console.log("Original Array Before sort");
for (var i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}


// Sorting array function
newArray.sort(function (a, b) {
    return a[1] - b[1];
})

console.log("After Sort");
for (var i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}

// loop through original array and append new items
for (var i = 0; i < array.length; i++) {
    array[i] = newArray[i][0];
}

console.log("Sorted array");
console.log(array);
