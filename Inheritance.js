// JavaScript source code
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function Student(favoriteCourse) {
    this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person("bekir", "geriþ");

var bekir = new Student("Programing");

alert(bekir.firstName + " " + bekir.lastName + " loves " + bekir.favoriteCourse);
