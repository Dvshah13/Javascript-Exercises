Javascript Exercises - Schoology

1. hello
function hello(name){
    console.log("Hello, " + name + "!");}

hello("Mustache");

2. function hello(name){
    name = name || "world";
    console.log("Hello, " + name + "!");
}

hello()

3. function madLib(name, subject) {
    console.log(name + "'s favorite subject in school is " + subject);}
    madLib("Anushka", "art")

4. function tipAmount(total, service){
    if (service == 'good'){
        console.log(total*.20); }
    else if (service == 'fair'){
        console.log(total*.15); }
    else if (service == 'bad'){
        console.log(total*.10); }
}

5. function totalAmount(total, service){
    if (service == 'good'){
        tip = total * .20; }
    else if (service == 'fair'){
        tip = total * .15; }
    else if (service == 'bad'){
        tip = total * .10; }
    console.log(tip + total);}

6. function splitAmount(total, service, people){
    if (service == 'good'){
        tip = total * .20; }
    else if (service == 'fair'){
        tip = total * .15; }
    else if (service == 'bad'){
        tip = total * .10; }
    console.log((tip + total)/people);}

7. function printNumber(x,y) {
    while (x <= y) {
        console.log(x);
        x++;}
}

8. function printSquare(size) {
    if (var x = 0, x < size, x++) {
        console.log("*****";
    }
}

9. size = 5
    for i in range(size):
    print ('*' * size)

    function printSquare(size) {
        for (var i = 0; i < size; i++) {
            console.log("*") * size;}}

10. # height = int(raw_input("Give me a height: "))
# width = int(raw_input("Give me a width: "))
# for i in range(height):
#     if i in[0]:
#         print("*" * width)
#     elif i in[height-1]:
#         print("*" * width)
#     else:
#         print("*"+ " "* (width-2) + "*")
# input()

function printBox(height, width) {
    for (var i = 0; i < height; i++) {
        console.log("*")* width;
    }
    else if ()
}

for(int j=1; j<=h; j++)
  {
    for(int i=1; i<=w; i++)
    {
      if(j ==1 || j==h || i==1 || i==w)
      {
        console.log("*");
      }
      else
      {
           console.log(" ");
      }
  }}

12. function printBanner(string) {
    console.log('*') * (length(string) + 4);
    console.log('*' + string + '*');
    console.log('*') * (length(string) + 4);
}

13. function factors(num) {
    for (var i = 1; i < num; i++) {
        if num%i = 0{
            console.log(i);
        }
    }
}

14.  function cipher(string, offset) {
    for (var i = 0; i < string.length; i++) {
        string[i] + offset = newString;
    }
    string.push(newString);
}

var caesarShift = function(str, amount) {

	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;

};

function cipher13(str) {
  var newString = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      newString.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      newString.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      newString.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  return newString.join("");
}

15. function decrypt(string, offset) {
    for (var i = 0; i < string.length; i++) {
        string[i] - offset = newString;
    }
    string.push(newString);
}

16. function leetSpeak(string) {
    for (var i = 0; i < string.length; i++) {
        if string[i]
    }
}

17. #Long-long vowels
# word = "Spoon"
# long_word = word
# vowel = "aa","ee","ii","oo","uu"
# for letters in word:
#     if letters in vowel:
#         long_word = long_word.replace("aa", "aaaaa")
#         long_word = long_word.replace("ee", "eeeee")
#         long_word = long_word.replace("ii", "iiiii")
#         long_word = long_word.replace("oo", "ooooo")
#         long_word = long_word.replace("uu", "uuuuu")
# print long_word

18. function sumNumbers([args]) {
    for (var i=0; i<args.length; i++) {
        sum = args[i] + sum;
    }
}

19.  function justPositives([args]) {
    for (var i=0; i<args.length; i++) {
        if args[i] > 0;
        newArgs.join(args[i])
    }
}

20.  function matrixAdd (tdArray) {
    tdArray[i][j] + tdArray[i][k]
    iterate

}

paper, rock scissors

if (choice1 === choice2) {
    return("The result is a tie!");
}

if (choice1 === "rock") {
    if (choice2 === "scissors") {
        return ("rock wins");
    } else {
        return ("paper wins");
    }
}

if (choice1 === "paper") {
    if (choice2 === "rock") {
        return ("paper wins");
    } else {
        return ("scissors wins");
    }
}

if (choice1 === "paper") {
    if (choice2 === "scissors") {
        return ("scissors wins");
    } else {
        return ("rock wins");
    }
}

if (choice1 === choice2) {
    return("The result is a tie!");
}

switch(choice1) {
    case "rock";
    switch(choice2) {
        case "paper":
        return "Paper wins";
        break;
        case "scissors":
        return "Rock wins"
        break;
    }
}

switch(choice1) {
    case "paper";
    switch(choice2) {
        case "rock":
        return "Paper wins";
        break;
        case "scissors":
        return "Scissors wins"
        break;
    }
}

switch(choice1) {
    case "scissors";
    switch(choice2) {
        case "rock":
        return "Rock wins";
        break;
        case "paper":
        return "Scissors wins"
        break;
    }
}

Tic Tac Toe:
board = [1,2,3,4,5,6,7,8,9]
function winning(
)

function ticTacToe(board) {
   for (var i = 0, n = 0; i < 3; i++) {
       if (board[i][n] === board[i][n + 1] && board[i][n + 1] === board[i][n + 2]) {
           return board[i][n];
       }
       else if (board[n][i] === board[n + 1][i] && board[n + 1][i] === board[n + 2][i]) {
           return board[n][i];
       }
       else if (board[n][i] === board[n + 1][i + 1] && board[n][i] === board[n + 2][i + 2]) {
           return board[n][i];
       }
       if (i === 2) {
           if (board[i][n] === board[i - 1][n + 1] && board[i][n] === board[i - 2][n + 2]) {
               return board[i][n];
           }
       }
   }
   return 'Null';
}
console.log(ticTacToe([
 ['O', 'O', 'O'],
 ['X', null, 'X'],
 [null, 'X', null]
 ]));
