let checkPermutation = (string1, string2) => {
  let hashString2 = {};

  if (
    (string1.length == 0 && string2.length == 0) ||
    string1.length != string2.length
  )
    return false;

  for (let i = 0; i < string2.length; i++) {
    hashString2[string2[i]] = true;
  }

  for (let i = 0; i < string1.length; i++) {
    if (hashString2[string1[i]] == true) {
      hashString2[string1[i]] = false;
    } else {
      return false;
    }
  }
  return true;
};

string1 = "abcd";
string2 = "dabc";

if (checkPermutation(string1, string2) == true) {
  console.log("Permutation");
} else {
  console.log("Not Permutation");
}
