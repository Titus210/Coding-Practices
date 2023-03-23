function openOrSenior(data) {
    range_start = -2;
    range_end = 26;

    do {
        // check if age is greater than 55 and handicap greater than 7
        if ((data[0] > 55) && data[1] > 7) {
            console.log("Senior")
        }
        else {
            console.log("Open");
        }
        break;
    }
    while ((data[1] >= range_start && data[1] <= range_end));

}

openOrSenior([55, 12]);
openOrSenior([55, 21]);
openOrSenior(19, -2);