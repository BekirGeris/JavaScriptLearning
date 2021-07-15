//var counter = 0;
//function add() {
//    return counter++;
//}


//function somerOtherFunction() {
//    counter += 10;
//}

var add = (function () {
    var counter = 0;
    return function () {
        return ++counter;
    }
})();