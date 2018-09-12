console.log("Part 1: Terms");

//What is the difference between interpolation and concatenation? Give an example of each.
console.log("1. Interpolation vs Concatenation. Interpolation is the process of linking strings/variables/constants together. Concatenation is the process of appending strings together.")
//Interpolation
//==> Process of evaluating an expression, specifically a string literal, and replacing variable placeholders by their values. 
//==> MUST BE WITH BACK-TICKS!
var interpolationExample = 'interpolation';
console.log(`This is an example of ${interpolationExample}.`);
//Concatenation
var concatenationExample = 'concate' + 'nation';
console.log(`This is an example of ${concatenationExample}.`);

//What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
console.log("2. DRY stands for Don't Repeat Yourself. A block of repeated code can and must be written in a clearer, more concise manner in order to avoid user confusion as well as more processing work for the computer. For example, if we have three or more if...else if loops, we might be able to condense the code into a switch.");

//What is the difference between declaring a variable and assigning a value to a variable? What do we mean when we say "define" a variable?
console.log("3. Declaring/Assigning/Defining. Declaring a variable is bringing it into existence, only then can we assign it a value. Defining tends to refer to the process of doing both at once.");
//When should we use const and when should we use let?
console.log("4. const/let: const CANNOT be redefined/reassigned, but we can change the internal value of a const(i.e. Array).")

//Unix question: What is a "parent" directory?
console.log("5. A 'parent' directory is a directory that contains its 'children' directories.")

//Unix, again: If you're not sure about how to use a Unix command, how can you get more info without being connected to the internet?
console.log("6. When in doubt about a Unix command, one can type 'man' before the command in order to see all information and options available regarding the command.")

//More Unix: What is "tab completion" and why is it awesome?
console.log("7. 'Tab completion' is a nifty tool in Unix where if one presses tab while typing out a path, the Terminal will automatically write out the rest of the path (granted the file/directory has already been created/exists).")


console.log("Part 2: Boolean Expressions and Operators");

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log("1. a < b is", a < b);
console.log("2. c > d is", c > d);
console.log("3. 'Name' === 'Name' is", 'Name' === 'Name');
console.log("4. a < b < c is", a < b < c);
console.log("5. a * a == d) is", a * a == d);
console.log("6. e === 'Kevin' is", e === 'Kevin');
console.log("7. 48 == '48' is", 48 == '48');

console.log("Part 3: While Loops");

console.log("1. Infinite loop? True will always be true, this is therefore an infinite loop.");
console.log("2. Infinite loop II. This is not an infinite loop as it would only keep running if runProgram were still true, which it isn't anymore(after the first run).");
console.log("3. Reading code. cf. comments.");
///// Declare letters variable and assign it string value "A"
// let letters = "A";
///// Declare i variable and assign it number value 0
// let i = 0;

///// while i has a value strictly less than 20, do this:
// while (i < 20) {
///// "this" being add an A to the variable letters (which is a string)
// 	letters += "A";
///// add 1 to i to run code again if possible
// 	i++;
///// done!
// }
///// print out the result in the console
// console.log(letters);

console.log("Part 4: Loops!");

console.log("1. for vs while. for loops are more concise and usually used when one needs to iterate a certain number of times. while loop will run until condition is met.");

console.log("2. for loop that will console.log() the numbers 0 to 999.");
	for (i = 0; i <= 999; i++){
		console.log(i);
	}

console.log("3. The mechanics of a for loop");
console.log("The first part of the control statement is: the initialization.");
console.log("The second part of the control statement is: the condition that must be met for the code to run.");
console.log("The third part of the control statement is: the iteration.");

console.log("4. for loop that will countdown from 999 to 0");
	for (i = 999; i >= 0; i--){
		console.log(i);
	}
console.log("5. More counting");
	for (let i = 1; i <= 10; i++){
		console.log(`The value of i is: ${i} of 10`);
	}

console.log("DONE!");















