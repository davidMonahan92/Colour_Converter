# Colour-Converter

A simple colour converter

- Allows the user to convert RGB colours to their hex code colour number
- Also allows the user to convert hex colours to their RGB colour number
- User can copy the colour output 

The Logic and Steps used for both converters are below

RGB to HEX converter
--------------------

Step 1 - Take in a string from an input field and assign it to a variable

Step 2 - Transform any letter in the string to lowercase using the toLowerCase method

Step 3 - Split each character into an array using the split method

Step 4 - Check to make sure its a valid rgb number ( starts with rgb, has ( ) brackets, has 3 numbers, the numbers aren't over 255) using if statements

Step 5 - Extract the 3 numbers, used Regex match method here to remove anything that isn't a number

Step 6 - Take the RGB values and work out the x & y values of the numbers for R, G and B. To do this divide by 16 to get the x values (quotient) and modulus 16 to get the value for y (remainder). Use Math.floor to get the correct number and no decimal numbers.
	
	X1 = R/16
	Y1 = R%16
	X2 = G/16
	Y2 = G%16
	X3 = B/16
	Y3 = B%16

	eg - rgb(54,155,229)

	X1 = 54/16 - 3
	Y1 = 54%16 - 6
	X2 = 155/16 - 9
	Y2 = 155%16 - 11
	X3 = 229/16 - 14
	Y3 = 229%16 - 5
  
	-------------------
  
	R = X1 + Y1 - (quotient joined with remainder)
	G = X2 + Y2 - (quotient joined with remainder)
	B = X3 + Y3 - (quotient joined with remainder)

	3 + 6
	9 + 11
	14 + 5
	= 36911145

Step 7 - Add the numbers to an new array and add the # symbol to the start of the number using the unshift method

Step 8 - Check if any of the numbers in the x or y values in the array are between 10 - 15 using a for loop and if statements, if so change the to the following:

	10 = A
	11 = B
	12 = C
	13 = D
	14 = E
	15 = F

	#36911145 -> #369BE5
		
Step 9 - Combine all the values in the array together using the join method
	'#' + X1 + Y1 + X2 + Y2 + X3 + Y3

	#369BE5

Step 10 - Output the result
				
--------------------------------------------------------------------------------------------------------
HEX to RGB Converter
--------------------

Step 1 - Take in a string from an input field and assign it to a variable

Step 2 - Transform any letter in the string to lowercase using the toLowerCase method

Step 3 - Split each character into an array using the split method

Step 4 - Check to make sure it's a hex number using if statements and the Regex match method (Starts with a # symbol, length is 7, only letters A-F present)

Step 5 - Remove the # symbol using the shift method

Step 6 - Check to see if there are any letters in the array using if statements and if so convert them to their number format: 

	A = 10
	B = 11
	C = 12
	D = 13
	E = 14
	F = 15

	eg - 369BE5 -> 36911145

Step 7 - Assign x1, y1, x2, y2, x3, y3 values from the array to get the RGB values

	36911145

	x1 = 3
	y1 = 6

	x2 = 9
	y2 = 11

	x3 = 14
	y3 = 5

	R = (x1 * 16) + y1 - (quotient times 16) plus remainder 
	G = (x2 * 16) + y2 - (quotient times 16) plus remainder
	B = (x3 * 16) + y3 - (quotient times 16) plus remainder
	
	R = (3 * 16) + 6 = 54
	G = (9 * 16) + 11 = 155
	B = (14 * 16) + 5 = 229

Step 8 - Combine the 3 value into a new RGB string using String Interpolation

	`rgb(${R},${G},${B})` = rgb(54,155,229)

Step 9 - Output the result

	


					
