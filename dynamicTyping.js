var customer = {
    id: 10,
    customerName: "Bekir GERÝÞ"
} //customer adýnda bir nesne oluþturuldu.

customer.country = "Türkiye";//var olan nesneye yeni özellik eklendi ve içeriði atandý

customer.sayHello = function () {
    alert("Hello" + this.customerName);
} //customer nesnesine metod eklendi.

customer.sayHello();//metod çalýþtýrýldý.