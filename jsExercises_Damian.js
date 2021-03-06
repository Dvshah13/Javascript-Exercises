<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>JS 101 Exercises</title>
        <script type="text/javascript">
            /*
            Hello, you!
            Write a function hello which given a name, says hello to the name. Use the following template:
            function hello(name) {
              // put your code here
            }
            hello('Mustache');
            Make the above program print
            Hello, Mustache!*/
            function hello(name) {
              // put your code here
              console.log("Hello, " + name + "!")
            }
            hello("Mustache");
            /*
            Hello, you! Part 2
            Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.
            Madlib
            Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).
            Example:
            > madlib('Anushka', 'art');
            'Anushka's favorite subject in school is art.'
            */
            function madlib(name, subject){
                console.log(name + "'s favorite subject in school is "+subject+".")
            }
            madlib('Anushka', 'art');
            /*
            Tip Calculator
            Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
            good -> 20%
            fair -> 15%
            bad -> 10%
            > tipAmount(100, 'good')
            20
            > tipAmount(40, 'fair')
            6
            */
            function tipAmount1(bill, tipType){
                var tip=0;
                if(tipType=="good"){
                    tip=0.2;
                } else if (tipType=="fair"){
                    tip=0.15;
                } else if (tipType=="bad"){
                    tip=0.1;
                }
                return bill * tip;
            }
            console.log("Good tip should be 20: " + tipAmount1(100, 'good'));
            console.log("Fair tip should be 6: " + tipAmount1(40, 'fair'));
            /*
            Tip Calculator 2
            Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
            > totalAmount(100, 'good')
            120
            > totalAmount(40, 'fair')
            46
            */
            function tipAmount2(bill, tipType){
                return bill + tipAmount1(bill,tipType);
            }
            console.log("Good tip should be 120: " + tipAmount2(100, 'good'));
            console.log("Fair tip should be 46: " + tipAmount2(40, 'fair'));
            /*
            Tip Calculator 3
            Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.
            > splitAmount(100, 'good', 5)
            24
            > splitAmount(40, 'fair', 2)
            23
            */
            function splitAmount(bill, tipType, people){
                return tipAmount2(bill, tipType)/people;
            }
            console.log("Split tip should be 24: " + splitAmount(100, 'good',5));
            console.log("Split tip should be 23: " + splitAmount(40, 'fair', 2));
            /*
            Print Numbers
            Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:
            > printNumbers(1, 10)
            1
            2
            3
            4
            5
            6
            7
            8
            9
            10
            Write two versions of the above function. One using a while loop and the other using a for loop.
            */
            function printNumbers(start,end){
                while(start<=end){
                    console.log(start);
                    start++;
                }
            }
            console.log("printNumbers version 1:");
            printNumbers(1,10);
            function printNumbers(start,end){
                for(var i=start;i<=end;i++){
                    console.log(i);
                }
            }
            console.log("printNumbers version 2:");
            printNumbers(1,10);
            /*
            Print a Square
            Write a function printSquare which is given a size and prints a square of that size using asterisks.
            > printSquare(5)
            *****
            *****
            *****
            *****
            *****
            */
            function printSquare(side){
                var line="";
                for(i=0;i<side;i++){
                    line+='*';
                }
                for(i=0;i<side;i++){
                    console.log(line);
                }
            }
            printSquare(5);
            /*
            Print a box
            Write function printBox which is given a width and height and prints a hollow box of those given dimensions.
            > printBox(6, 4)
            ******
            *    *
            *    *
            ******
            */
            function printBox(w,h){
                var line = "";
                for(i=0;i<w;i++){
                    line+='*';
                }
                console.log(line);
                var stack = "";
                for(i=0;i<w;i++){
                    if(i==0){
                        stack="*";
                    } else if (i==w-1){
                        stack+="*";
                    } else{
                        stack+=" ";
                    }
                }
                for(i=1;i<h-1;i++){
                    console.log(stack);
                }
                if(h>1)console.log(line);
            }
            printBox(6, 4);
            console.log("6x1");
            printBox(6, 1);
            /*
            Print a Banner
            Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.
            > printBanner('Welcome to DigitalCrafts')
            ****************************
            * Welcome to DigitalCrafts *
            ****************************
            */
            function printBanner(s){
                //find the total width
                var w=s.length;
                printBox(w+4,1); //text plus '* ' and ' *'
                console.log("* "+s + " *");
                printBox(w+4,1); //text plus '* ' and ' *'
            }
            printBanner('Welcome to DigitalCrafts');
            /*
            Factor a Number
            Write a function factors which is given a number and returns an array containing all its factors. What are factors? https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number
            */
            function factors(n){
                var f = [];
                for (i=0;i<=n;i++){
                    if (n%i==0){
                        f.push(i);
                    }
                }
                return f;
            }
            console.log("Factors of 6:");
            console.log(factors(6));
            console.log("Factors of 8128:");
            console.log(factors(8128));
            /*
            Caesar Cipher
            Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.
            > cipher('Genius without education is like silver in the mine')
            'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'*/
            function cipher(s,offset){
                offset = offset || 13;//default to 13
                //alphabet
                var a='abcdefghijklmnopqrstuvwxyz';
                //offset by input, added a space to the end to convert spaces too
                c=a.slice(offset)+a.slice(0,offset);
                var d = "";
                for (var i = 0, len = s.length; i < len; i++) {
                    //get the character in 'e' in the same position it is in 'a'
                    //i.e. if we are in the 4th position in a, return the 4th pos in 'e'
                    var posOfChar = a.indexOf(s.toLowerCase().charAt(i));
                    if (posOfChar<0){
                        //char not found in cipher, output directly
                        d+=s.charAt(i);
                    }
                    else{
                        //if the char was uppercase, add as uppercase
                        charToAdd = c.charAt(posOfChar);
                        if(s.toUpperCase().charAt(i)==s.charAt(i)){
                            charToAdd=charToAdd.toUpperCase();
                        }
                        d+= charToAdd;
                    }
                }
                return d;
            }
            console.log(cipher('Genius without education is like silver in the mine'));
            /*
            Caesar Cipher 2
            Write a function decipher which is given a string, an offset, and returns the original message.
            > decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar')
            'Genius without education is like silver in the mine'
            */
            function decipher(e,offset){
                return cipher(e,-offset);
            }
            console.log(decipher(cipher('Genius without education is like silver in the mine')));
            /*
            Leetspeak
            Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:
            A => 4
            E => 3
            G => 6
            I => 1
            O => 0
            S => 5
            T => 7
            > leetspeak('Leet')
            l337
            */
            function toLeet(c){
                var r="";
                switch(c.toLowerCase()){
                    case 'a':
                        r='4';
                        break;
                    case 'e':
                        r='3';
                        break;
                    case 'g':
                        r='6';
                        break;
                    case 'i':
                        r='1';
                        break;
                    case 'o':
                        r='0';
                        break;
                    case 's':
                        r='5';
                        break;
                    case 't':
                        r='7';
                        break;
                    default:
                        r=c;
                }
                return r
            }
            function leetspeak(s){
                r="";
                for (var i = 0, len = s.length; i < len; i++) {
                    c=s.charAt(i);
                    r+=toLeet(c);
                }
                return r;
            }
            console.log("leetspeak:" + leetspeak('Leet'));
            /*
            Long-long Vowels
            Write a function, which is given a string, return the result of extending any long vowels to the length of 5.
            > longLongVowels('Good')
            'Goooood'
            > longLongVowels('Cheese')
            'Cheeeeese'
            > longLongVowels('Man')
            'Man'
            */
            function isVowel(c){
                switch (c.toLowerCase()){
                    case 'a':
                        return true;
                    case 'e':
                        return true;
                    case 'i':
                        return true;
                    case 'o':
                        return true;
                    case 'u':
                        return true;
                    case 'y':
                        //sometimes y!
                        return (Math.random() >= 0.5);
                }
            }
            function longLongVowels(s){
                var r="";
                var lastChar="";
                for (var i = 0, len = s.length; i < len; i++) {
                    var c=s.charAt(i);
                    if(lastChar==c && isVowel(c)){
                        //skip until the next char does not equal this vowel
                        while(s.charAt(i+1)==c){
                            i++;
                        }
                        //the first one was already added, only add 4
                        r+=c+c+c+c;//I know, I know
                    } else {
                        r+=c;
                    }
                    lastChar=c;
                }
                return r;
            }
            console.log(longLongVowels('Good'));
            console.log(longLongVowels('Cheese'));
            console.log(longLongVowels('Man'));
            console.log(longLongVowels('Maan'));
            /*
            Sum the numbers
            Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.
            > sumNumbers([1, 4, 8])
            13
            */
            function sumNumbers(a){
                r=0;
                for(var i=0;i<a.length;i++){
                    r+=a[i];
                }
                return r;
            }
            console.log(sumNumbers([1, 4, 8]));
            /*
            Just the positives
            Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.
            > positiveNumbers([1, -3, 5, -3, 0])
            [1, 5]
            > positiveNumbers([1, 2, 3])
            [1, 2, 3]
            > positiveNumbers([-1, -2, -3])
            []
            */
            function positiveNumbers(a){
                r=[];
                for(var i=0;i<a.length;i++){
                    if(a[i]>0) r.push(a[i]);
                }
                return r;
            }
            console.log(positiveNumbers([1, -3, 5, -3, 0]));
            console.log(positiveNumbers([1, 2, 3]));
            console.log(positiveNumbers([-1, -2, -3]));
            /*
            Matrix Addition
            Write a function matrixAdd which is given two two-dimensional arrays, and returns a new two-dimensional array containing their matrix sum.
            > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
            [ [ 6, 5 ], [ 3, 4 ] ]
            */
            function matrixAdd(m1,m2){
                mR = [[0,0],[0,0]];
                for (var x=0;x<2;x++){
                    for (var y=0;y<2;y++){
                        mR[x][y]+=m1[x][y]+m2[x][y];
                    }
                }
                return mR;
            }
            console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));
            /*
            Matrix Multiplication
            Write a function matrixMultiply which is given two two-dimensional arrays - you can assume the matricies are of size 2x2. It will return the result of matrix multiplication between the two given matricies.
            https://www.khanacademy.org/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/v/matrix-multiplication-intro
            > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
            [ [22,  8], [27, 10] ]
            */
            function matrixMultiply(m1,m2){
                mR = [[0,0],[0,0]];
                for (var x=0;x<2;x++){
                    for (var y=0;y<2;y++){
                        //mR[x][y]+=m1[x][y]*m2[y][x];
                        for (var i = 0; i < 2; ++i) {
                            mR[x][y] += m1[x][i] * m2[i][y];
                        }
                    }
                }
                return mR;
            }
            console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));
            /*
            Rock Paper Scissors
            Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.
            > rockPaperScissors('rock', 'scissors')
            'player 1'
            > rockPaperScissors('rock', 'paper')
            'player 2'
            > rockPaperScissors('paper', 'paper')
            'draw'*/
            function rockPaperScissors(p1,p2){
                choices=["rock","paper","scissors"];
                results=[];
                for(var i=0;i<choices.length;i++){
                    results[choices[i]]=[];
                    for(var j=0;j<choices.length;j++){
                        if(choices[i]!=choices[j])results[choices[i]][choices[j]]=[];
                    }
                }
                results["rock"]["paper"] = false;
                results["rock"]["scissors"] = true;
                results["paper"]["scissors"] = false;
                results["paper"]["rock"] = true;
                results["scissors"]["paper"] = true;
                results["scissors"]["rock"] = false;
                if (p1==p2){
                    return "Draw";
                }
                else{
                    return results[p1][p2]?"Player 1":"Player 2";
                }
            }
            console.log(rockPaperScissors('rock', 'scissors'));
            console.log(rockPaperScissors('rock', 'paper'));
            console.log(rockPaperScissors('paper', 'paper'));
            /*
            Tic Tac Toe
            Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell in the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will determine the winner by
            returning 'O' if O makes a row
            returning 'X' if X makes a row
            return null if neither makes a row
            > ticTacToe([
              ['O', 'O', 'O'],
              ['X', null, 'X'],
              [null, 'X', null]
              ])
            'O'
            > ticTacToe([
              ['O', 'X', 'O'],
              ['O', 'X', null],
              [null, 'X', null]
              ])
            'X'
            > ticTacToe([
              ['O', 'X', 'O'],
              ['O', 'O', null],
              [null, 'X', 'X']
              ])
            null
            */
            function ticTacToe(board){
                for(var i=0;i<3;i++){
                    //check horiz
                    if(board[i][0]==board[i][1] && board[i][0]==board[i][2]){
                        return board[i][0];
                    }
                    //check verts
                    if(board[0][i]==board[1][i] && board[0][i]==board[2][i]){
                        return board[0][i];
                    }
                }
                if((board[0][0]==board[1][1] && board[0][0]==board[2][2]) || (board[2][0]==board[1][1]&& board[2][0]==board[0][2]) ){
                    return board[1][1];
                }
                return null;
            }
            console.log(ticTacToe([
              ['O', 'O', 'O'],
              ['X', null, 'X'],
              [null, 'X', null]
            ]));
            console.log(ticTacToe([
                ['O', 'X', 'O'],
                ['O', 'X', null],
                [null, 'X', null]
            ]));
            console.log(ticTacToe([
              ['O', 'X', 'O'],
              ['O', 'O', null],
              [null, 'X', 'X']
          ]));
        </script>
    </head>
    <body>

    </body>
</html>
