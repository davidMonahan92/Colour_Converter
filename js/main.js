function rgbConverter(){
	try {
		document.getElementById('hexOutput').value = "";

		let rgbInput = document.getElementById('rgbConveter').value;
		rgbInput = rgbInput.toLowerCase();

		let tempRGBStore = rgbInput.split('');
		
		if(tempRGBStore[0] !== 'r' || tempRGBStore[1] !== 'g' || tempRGBStore[2] !== 'b' || tempRGBStore[3] !== '(' || tempRGBStore[tempRGBStore.length-1] !== ')'){
			alert("Error! Not a valid RGB Number, enter a valid number.")
			throw "exit";
		}

		let numbers = rgbInput.match(/\d+/g);

		if(numbers.length < 3 || numbers.length > 3 || numbers[0] >= 256 || numbers[1] >= 256 || numbers[2] >= 256){
			alert("Error! Not a valid RGB Number, enter a valid number.")
			throw "exit";
		}

		let x1 = Math.floor(numbers[0] / 16);
		let y1 = Math.floor(numbers[0] % 16);
		let x2 = Math.floor(numbers[1] / 16);
		let y2 = Math.floor(numbers[1] % 16);
		let x3 = Math.floor(numbers[2] / 16);
		let y3 = Math.floor(numbers[2] % 16);

		let arrayStore = [x1,y1,x2,y2,x3,y3];
		arrayStore.unshift('#');

		for(let i = 0; i < arrayStore.length; i++){
			if(arrayStore[i] >= 10 && arrayStore[i] <= 15){
				if (arrayStore[i] === 10) {
					arrayStore[i] = 'A';
				} else if( arrayStore[i] === 11){
					arrayStore[i] = 'B';
				} else if(arrayStore[i] === 12){
					arrayStore[i] = 'C';
				} else if(arrayStore[i] === 13){
					arrayStore[i] = 'D';
				} else if(arrayStore[i] === 14){
					arrayStore[i] = 'E';
				} else {
					arrayStore[i] = 'F';
				}
			}
		}

		let hexNumber = arrayStore.join('');
		document.getElementById('hexOutput').value = hexNumber;
	} catch(e){
		console.log(e);
	}
	
}

function hexConverter(){
	try {

		document.getElementById('rgbOutput').value = "";

		let hexInput = document.getElementById('hexConveter').value;
		hexInput = hexInput.toLowerCase();

		let hexStore = hexInput.split('');

		const hash = '#';

		if(hexStore[0] !== hash || hexStore.length !== 7 || hexInput.match(/[g-z]/i)){
			alert("Error! not a valid hex number, enter another number!")
			throw "exit";
		}

		for(let i = 0; i < hexStore.length; i++){

			if(hexStore[0] === hash){
				hexStore.shift();
			}

			if(hexStore[i] === 'a'){
				hexStore[i] = 10;
			} else if(hexStore[i] === 'b'){
				hexStore[i] = 11;
			} else if(hexStore[i] === 'c'){
				hexStore[i] = 12;
			} else if(hexStore[i] === 'd'){
				hexStore[i] = 13;
			} else if(hexStore[i] === 'e'){
				hexStore[i] = 14;
			} else if(hexStore[i] === 'f'){
				hexStore[i] = 15;
			}
		}

		let x1 = hexStore[0];
		let y1 = hexStore[1];

		let x2 = hexStore[2];
		let y2 = hexStore[3];

		let x3 = hexStore[4];
		let y3 = hexStore[5];

		let r = (x1 * 16) + y1 * 1;
		let g = (x2 * 16) + y2 * 1;
		let b = (x3 * 16) + y3 * 1;		

		let rgbNumber = `rgb(${r},${g},${b})`; 
		document.getElementById('rgbOutput').value = rgbNumber;
	} catch (e) {
		console.log(e);
	}
	
}

function copyHEXColour(){
	try{
		//gets the value of the input field
		let copyHEXColour = document.getElementById("hexOutput");

		if(copyHEXColour.value.length < 7 || copyHEXColour.value.length > 7){
			alert("Error! Not a valid hex number, cannot copy")
			throw "exit";
		}

		/* Select the text field */
		copyHEXColour.select();

		/* Copy the text inside the input field */
		document.execCommand("copy");

		/* Alert the copied colour */
		alert("Copied the Colour: " + copyHEXColour.value);
	} catch(e) {
		console.log(e);
	}
	
}

function copyRGBColour(){
	try {
		//gets the value of the input field
		let copyRGBColour = document.getElementById("rgbOutput");
		
		if(copyRGBColour.value.length < 10 || copyRGBColour.value.length > 16){
			alert("Error! Not a valid rgb number, cannot copy");
			throw "exit";
		}

		/* Select the text field */
		copyRGBColour.select();

		/* Copy the text inside the input field */
		document.execCommand("copy");

		/* Alert the copied colour */
		alert("Copied the Colour: " + copyRGBColour.value);
	} catch(e) {
		console.log(e);
	}
	
}
