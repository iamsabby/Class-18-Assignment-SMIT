// QUESTION 1

// function dateTime()
// {
//     var date = new Date();
//     return date;
// }
// document.write(dateTime());

// QUESTION 2

// function greetFunc()
// {
//     var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");
//     alert("Greetings "+firstName+" "+lastName);
// }
// greetFunc();

// QUESTION 3

// function sum()
// {
// var a = +prompt("Enter first number: ");
// var b = +prompt("Enter second number: ");
// var sum = a+b;
// return "The sum of numbers "+a+" and "+b+" is "+sum;
// }
// document.write(sum());

// QUESTION 4

// function calculate(num1,num2,operator)
// {
//     if (operator === '+')
//     {
//         return "The result of "+num1+"+"+num2+" is "+(num1+num2);
//     }
//     else if (operator==='-')
//     {
//         return "The result of "+num1+"-"+num2+" is "+(num1-num2);
//     }
//     else if (operator === '*' || operator === 'x')
//     {
//         return "The result of "+num1+"x"+num2+" is "+(num1*num2);

//     }
//     else if (operator === '/')
//     {
//         return "The result of "+num1+"/"+num2+" is "+(num1/num2);

//     }
// }
// document.write(calculate(5,3,'x'));

// QUESTION 5

// function squareCalculator(n)
// {
//     return "The square of "+n+" is "+n*n;
// }
// document.write(squareCalculator(5));


// QUESTION 6

// function calcFactorial(n)
// {
//     var fac=1;
//     for (var i=n; i>=1; i--)
//     {
//         fac=fac*i;
//     }
//     return "The factorial of "+n+" is "+fac;
// }
// document.write(calcFactorial(3));

// QUESTION 7

// function countNum(s,e)
// {
//     for (var i=s; i<=e; i++)
//     {
//         document.write(i+"<br>");
//     }
// }
// countNum(1,5);

// QUESTION 8



// QUESTION 9

// function calculateArea(w,h)
// {
//     var area=w*h;
//     return "The area of the rectangle is: "+area;
// }
// var w=5, h=10;
// document.write(calculateArea(w,h));
// document.write("<br>"+calculateArea(10,15));

// QUESTION 10

// function palindromeCheck(str)
// {
//     var revStr = '';
//     for (var i=str.length-1; i>=0; i--)
//     {
//         revStr+=str[i];
//     }
//     if (str==revStr)
//     {
//         return "The string "+str+" is a palindrome";
//     }
//     else {
//         return "The string "+str+" is not a palindrome";
//     }
// }
// document.write(palindromeCheck("bulb"));

// QUESTION 11

// function upperCaseLetter(str) {

//     var nString= "";
//     for (var i = 0; i < str.length; i++) {
//       if (i==0 || str[i-1]==' ')
//       {
//       nString+=str[i].toUpperCase();
//       }
//       else {
//         nString += str[i];
//       }
//     }
//     return "Original String: "+str+"<br>Revised String: "+nString;
// }
//     document.write(upperCaseLetter("the quick brown fox"));


// QUESTION 12

// function longestWord(str) {
//     var words = str.split(' ');
//     var longestWord = '';
  
//     for (var i = 0; i < words.length; i++) {
//       var currentWord = words[i];
//       if (currentWord.length > longestWord.length) {
//         longestWord = currentWord;
//       }
//     }
  
//     return "The longest word in the string '<b>" + str + "'</b> is " + longestWord;
//   }
// document.write(longestWord("Pakistan is the best"));

// QUESTION 13

// function searchChar(str,c)
// {
//     var o = 0;
//     for (var i=0; i<str.length; i++)
//     {
//         if (str[i]==c)
//         {
//             o++;
//         }
//     }
//     return "The letter "+c+" has occurred "+o+" time(s) in string "+str+".";
// }
// document.write(searchChar("Pakistan",'a'));

// QUESTION 14

// function calcCircumference(a) 
// {
//     return "The circumference is "+(2*3.14*a);
// }
// document.write(calcCircumference(3));