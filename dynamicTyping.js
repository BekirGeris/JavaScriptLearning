var customer = {
    id: 10,
    customerName: "Bekir GER��"
} //customer ad�nda bir nesne olu�turuldu.

customer.country = "T�rkiye";//var olan nesneye yeni �zellik eklendi ve i�eri�i atand�

customer.sayHello = function () {
    alert("Hello" + this.customerName);
} //customer nesnesine metod eklendi.

customer.sayHello();//metod �al��t�r�ld�.