// JavaScript source code
function Customer(first, last, country, age) {
    this.first = first;
    this.last = last;
    this.country = country;
    this.age = age;
}

var someCustomer = new Customer("Bekir", "GER��", "T�rkiye", 22);

someCustomer.prototyping.email = "Bergers@gmail.com";
someCustomer.prototyping.fullName = function () {
    return this.first + " " + last;
};

alert(someCustomer.country);
alert(someCustomer.email);
alert(someCustomer.fullName);
