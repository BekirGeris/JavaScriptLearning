// JavaScript source code
var Person = {
    name: "bekir",
    email: "none",
    sendEmail: function () {
        alert("Email send to :" + this.name + "/" + this.email);
    }
}

function Customer(name, email) {
    this.name = name;
    this.email = email;
    //other staff
}

function Employee(name, email) {
    this.name = name;
    this.email = email;
    //other staff
}

Customer.prototype = Person;
var someCustomer = new Customer("bekir", "begers@gmail.com");
someCustomer.sendEmail();

Employee.prototype = Person;
var someEmployee = new Employee("bek", "bek@gmail.com");
someEmployee.sendEmail();
