//for loop imzasý
for (var i = 0; i < 100; i++) {
    alert(i);
    //break; loop sonlandýrýlýr.
    //continue; loop un sadece bir adýmý atlanýr.
}


//while loop imzasý
var number = 1;
while (number < 100) {
    alert(number);
    number++;
}

//do-while loop imzasý
var age = prompt("Your age?")
var result = "";
do {
    result += age;
    result += "-";
    age--;
} while (age < 10)
alert(result);

