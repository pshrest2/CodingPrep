/**
 * Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters,
 * and that you are given the "true" length of the string. (Note: if implementing in Java, please use a character array so that you can perform this operation in place.)
 *
 * EXAMPLE:
 * Input: "Mr   John   Smith   ", 13
 * Output: "Mr%20Hohn%20Smith"
 *
 */

let replace = (stringMain, stringLength) => {
  let string = new Array(stringLength);
  let tempString = "";

  if (stringLength < 1) {
    return stringMain;
  }
  for (let i = 0; i < stringLength; i++) {
    if (stringMain[i] === " ") {
      string[i] = "%20";
    } else {
      string[i] = stringMain[i];
    }
  }
  for (let i = 0; i < string.length; i++) {
    tempString += string[i];
  }
  return tempString;
};

let str = "Pr Anaya Shre Stha   ";
console.log(replace(str, 18));

//Time : O(N)
//Space: O(N)
