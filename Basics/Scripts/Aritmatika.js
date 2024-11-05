//Operator Matematika
let result = 1 + 2;
document.writeln("<p>1 + 2 = " + result + "</p>");
let originalResult = result;

result = result - 1;
document.writeln("<p>" + originalResult + "-1 = " + result + "</p>");
originalResult = result;

result = result * 2;
document.writeln("<p>" + originalResult + " * 2 = " + result + "</p>");
originalResult = result;

document.writeln("<br>");

//Operator Augmented assingment
let result1 = 1 + 2;
document.writeln("<p>1 + 2 = " + result + "</p>");
let originalResult1 = result;

result -= 1;
document.writeln("<p>" + originalResult + "-1 = " + result + "</p>");
originalResult = result;

result *= 2;
document.writeln("<p>" + originalResult + " * 2 = " + result + "</p>");
originalResult = result;

// Operator Unary
let hasil = +1;
document.writeln("<p>" + hasil + "</p>");

hasil--;
document.writeln("<p>" + hasil + "</p>");

hasil++;
document.writeln("<p>" + hasil + "</p>");

hasil = -hasil;
document.writeln("<p>" + hasil + "</p>");
