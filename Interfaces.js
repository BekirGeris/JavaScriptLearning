// JavaScript source code
function sendEmail(personInterface) {
    var to = personInterface.email;
    var name = personInterface.name;

    var send = function () {
        alert("Email send to :" + this.name + "/" + this.to);
    }

    send();

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

var someCustomer = new Customer("bekir", "bekir@gmail.com");
var someEmployee = new Employee("ragýb", "ragýb@gmail.com");
sendEmail(someCustomer);
sendEmail(someEmployee);