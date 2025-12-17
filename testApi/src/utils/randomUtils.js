const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

const allLetters = upperCaseLetters + lowerCaseLetters;
const lettersAndNumbers = allLetters + numbers;

const getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFromArray = function (array) {
    return array[getRandomNumber(0, array.length - 1)];
};

const getRandomString = function (minChars = 5, maxChars = getRandomNumber(5, 15)) {
    const stringLength = Math.floor(Math.random() * (maxChars - minChars) + minChars);

    let randomString = '';

    for (let i = 0; i < stringLength; i++) {
        randomString += getRandomFromArray(allLetters);
    }

    return randomString;
};

const getRandomId = function (idPrefix = '', idLength = 21) {
    let id = '';

    for (let i = 0; i < idLength; i++) {
        id += lettersAndNumbers.charAt(
            Math.floor(Math.random() * lettersAndNumbers.length),
        );
    }

    return idPrefix + id;
};

module.exports = {
    getRandomString,
    getRandomNumber,
    getRandomFromArray,
    getRandomId,
};
