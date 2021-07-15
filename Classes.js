// JavaScript source code
function Customer(firsName, lastName) {//constructor
    this.firsName;//public
    this.lastName;

    var someField = "some value";//private 

    this.sendProduct = function () {//operation
        alert("Product send!");
    }
}

var bekir = new Customer("Bekir", "Geriþ");

bekir.sendProduct;