function sortByLength(array) {
    let newArray = [];
    for (var i = 0; i < array.length; i++) {
        // get size of string in array
        size = array[i].length;

        // push array item and size to new array in a multidimensional form
        newArray.push([array[i], size]);
    }

    // Sorting array function
    newArray.sort(function (a, b) {
        return a[1] - b[1];
    })
    for (var i = 0; i < array.length; i++) {
        array[i] = newArray[i][0];
    }
    return array;
};