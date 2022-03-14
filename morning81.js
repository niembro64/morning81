const stringToWordArray = (str) => {
    word = "";
    newArr = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] === " " && word.length != 0) {
            newArr.push(word);
            word = "";
        } else if (str[i] != " ") {
            word += str[i];
        }
    }

    if (word.length != 0) {
        newArr.push(word);
    }

    return newArr;
};

const reverseWordOrder = (str) => {
    var newArr = stringToWordArray(str);
    var sentence = "";
    for (var i = 0; i < newArr.length; i++) {
        sentence = newArr[i] + " " + sentence;
    }
    return sentence;
};

string = "Did I shine my shoes today?";
// console.log(stringToWordArray(string));
console.log(reverseWordOrder(string));
