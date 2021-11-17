var num1;
var num2;
var operator;
var result;

StartCalculator();

function StartCalculator() {
    GetInputs();
    DisplayResult();
    prompt("Do you want to use the calculator again? (y/n) ") == 'y' ? Reset() : DisplayGoodbye();
}

function GetInputs() {
    num1 = prompt("Enter first number: ");
    num2 = prompt("Enter second number: ");
    operator = prompt("Enter operator to use: ");
    result = CalculateResult();
}

function CalculateResult() {
    switch(operator) {
        case '+':
            return parseInt(num1) + parseInt(num2);
        case '-':
            return parseInt(num1) - parseInt(num2);
        case '*':
            return parseInt(num1) * parseInt(num2);
        case '/':
            return parseInt(num1) / parseInt(num2);
        default:
            return "Syntax error. Invalid operator.";
    }
}

function DisplayResult() {
    var p = document.getElementById('container');
    
    var toAdd = 
    "<h1>Simple Calculator</h1>" + "<br>" +
    num1 + " " + operator + " " + num2 + " = " + result;

    p.innerHTML += toAdd;
}

function DisplayGoodbye() {
    var p = document.getElementById('container');
    
    var toAdd = 
    "<br>" + "Good bye!";

    p.innerHTML += toAdd;
}

function Reset() {
    var p = document.getElementById('container');
    p.innerHTML = "";

    num1 = num2 = result = 0;
    operator = "";

    StartCalculator();
}