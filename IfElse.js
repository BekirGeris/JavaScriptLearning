var date = new Date();
var hour = date.getHours();

if (5 <= hour && hour <= 11) {
    alert("Good morning");
} else if (11 < hour && hour < 17) {
    alert("Good afternoon");
} else if (17 <= hour && hour < 23) {
    alert("Good evening");
} else {
    alert("Good night");
}