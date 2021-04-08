const { JSDOM } = require("jsdom");
const { window } = new JSDOM();

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a string: ", (string) => {
  if (string.length == 0) {
    console.log("Enter something");
    readline.close();
    return;
  }
  if (isUnique(string)) {
    console.log("Unique");
  } else {
    console.log("Not Unique");
  }
  readline.close();
});

let hasUniqueCharacters = (string) => {
  let start = window.performance.now();
  let length = string.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (string[i] === string[j]) {
        let end = window.performance.now();
        console.log(`Execution time: ${end - start} ms.`);
        return false;
      }
    }
  }
  let end = window.performance.now();
  console.log(`Execution time: ${end - start} ms.`);

  return true;
};

let isUnique = (string) => {
  let start = window.performance.now();

  let hash = {};
  for (let i = 0; i < string.length; i++) {
    hash[string[i]] = 0;
  }
  for (let i = 0; i < string.length; i++) {
    hash[string[i]] += 1;
  }
  for (let i = 0; i < string.length; i++) {
    if (hash[string[i]] > 1) {
      let end = window.performance.now();
      console.log(`Execution time: ${end - start} ms.`);
      return false;
    }
  }
  let end = window.performance.now();
  console.log(`Execution time: ${end - start} ms.`);
  return true;
};
