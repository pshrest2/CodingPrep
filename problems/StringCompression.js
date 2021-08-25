const compressString = (inputString) => {

	let outputString = "";
	let count = 1;
	let currentCharacter = inputString[0];
	let countForUnCompressableString = 0;

	for(let i = 1; i <= inputString.length; i++){
		if(inputString[i] === currentCharacter){
			count++;
		}else{
			countForUnCompressableString++;
			outputString = outputString.concat(currentCharacter, count)
			currentCharacter = inputString[i];
			count = 1;
		}
	}
	console.log(countForUnCompressableString)
	return countForUnCompressableString === inputString.length ? inputString : outputString
}

// const inputString = "aAbCcCccABA";
const inputString = "abcab";
const outputString = compressString(inputString.toLowerCase());
console.log(outputString)




