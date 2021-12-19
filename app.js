var a = "", b = "";
var sign = "";

//performs the actual function
//function to perform addition
function add() {
    a = (Number(a) + Number(b))
    return a;
   
}
//function to perform subtraction
function sub() {
    a = (Number(a) - Number(b))
    return a;
    
}
//function to perform multiplication
function multiply() {
    a = (Number(a) * Number(b))
    return a;
}
//function to perform division
function divide() {
    
    a = (Number(a) / Number(b))
    return a;
}

function calculate() {
    var result = "";
    switch (sign) {
        case '+':
            result=add();
            
            break;
        case '-':
            result=sub();
            
            break;
        case '*':
            result=multiply();
            
            break;
        case '/':
            result=divide();
           
            break;
    }
    document.getElementById('numdisplay').innerHTML = result;
    b = "";
    sign = "";
}

//triggered when a button is pressed
function perform(m) {

    //checks for =
    if (m == "=") {
        if ((a != "") & (b != "")) {
            calculate();
        }
    }
    //checks for signs
    else if ((m == "+") || (m == "-") || (m == "*") || (m == "/")) {
        if ((a != "") && (b == "")) {
            sign = m;
            document.getElementById('numdisplay').innerHTML = a + sign;
        }
        else if ((a != "") && (b != "")) {
            calculate();
            sign = m;
            document.getElementById('numdisplay').innerHTML = a + sign;
        }
    }
    //checks for numbers and decimals
    else {
        if (sign == "") {
            a = a + m;
            document.getElementById('numdisplay').innerHTML = a;
        }
        else {
            b = b + m;
            document.getElementById('numdisplay').innerHTML = a + sign + b;
        }
    }
}
function reset(m) {
    location.reload();
}
