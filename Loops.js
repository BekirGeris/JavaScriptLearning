//for loop imzas�
for (var i = 0; i < 100; i++) {
    alert(i);
    //break; loop sonland�r�l�r.
    //continue; loop un sadece bir ad�m� atlan�r.
}


//while loop imzas�
var number = 1;
while (number < 100) {
    alert(number);
    number++;
}

//do-while loop imzas�
var age = prompt("Your age?")
var result = "";
do {
    result += age;
    result += "-";
    age--;
} while (age < 10)
alert(result);

