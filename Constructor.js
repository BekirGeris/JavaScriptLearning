// This in a function inside an object
var student = {
    firstName: "Bekir",
    lastName: "Geri�",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

alert(student.fullName);

//Object constructor 
//this in an object
function Customer(first, last, country, age) {
    this.first = first;
    this.last = last;
    this.country = country;
    this.age = age;
}

var someCustomer = new Customer("Bekir", "GER��", "T�rkiye", 22);

alert(someCustomer.first);