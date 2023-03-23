// return masked string
function maskify(cc) {
    // check if is equal to four
    if(cc.length <= 4) return cc;
else{
    var maskedString = "";
    for (var i = 0; i < cc.length - 4; i++) {
        maskedString += "#";
    }
    maskedString += cc.slice(-4);
    return maskedString;
}
}



var word = "Wordings"
console.log(maskify(word));