//Fonksiyon imzasý
function functionName(parameter1, parameter2) {
    //fonction code
    return parameter1 * parameter2;
}

alert(functionName());//or
alert(functionName(2));//or
alert(functionName(2, 3));//or
alert(functionName(2, 3, 4));//þeklinde fonksiyon çaðrýlabilir.

//Function without "return"
function functionWithOutReturn(parameter1, parameter2) {
    alert("This is a function without 'return' statement");
}

functionWithOutReturn();
functionWithOutReturn(2, 3);

//Parameter Defaults
function functionName2(x, y) {
    if (y == undefined) {
        y = 5;//y parametresi gönderilmez ise y deðiþkenine default olarak 5 atanýr.
    }
    return x * y;
}

functionName2();
functionName2(4);
functionName2(4, 6);

//the arguments object
max = findMax(255, 145, 589, 856, 856, 896, 7458, 123);

function findMax() {
    var i, max = 0;

    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}