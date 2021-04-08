/**
 *  Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
    A palindrome is a word or phrase that is the same forwards and backwards. A permutation
    is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
    1.5
    1.6
    EXAMPLE
    Input: Tact Coa
    Output: True (permutations: "taco cat", "atco eta", etc.)
 */
let pallindromePermutation = (stringValue) => {
  let status = {};
  let length = 0;
  let string = stringValue.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      continue;
    }
    length++;
    status[string[i]] = 0;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      continue;
    } else {
      status[string[i]] += 1;
    }
  }

  if (Object.keys(status).length === Math.ceil(length / 2)) {
    return true;
  }
  return false;
};

console.log(pallindromePermutation("Tact Coa"));
