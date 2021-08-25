// not implemented yet
// trying not to create a new string or array
// simply trying to manipulate the existing string
const soln2 = (inputString, length) => {
	for(let i=0; i < length; i++){
		if(inputString[i] === ' ')
			inputString[i] = SPACE_CHAR;
	}
	inputString.trim();
	return inputString;
}


const soln1 = (inputString, length) => {
	let newStringArray = new Array(length);
	let newString = "";

	for(let i=0; i < length; i++){
		if(inputString[i] === ' ')
			newStringArray[i] = "%20";
			// newString.concat("%20");
		else
			newStringArray[i] = inputString[i];
			// newString.concat(inputString[i])
			
	}

	for(let i=0; i<length; i++){
		newString += newStringArray[i]
	}

	return newString;
}


let inputString = "Hello Wor ld      ";
let length = 11;
const SPACE_CHAR = "%20";


const result = soln1(inputString, length);
console.log(result)


