//力扣  回文数

var isPalindrome = function(x) {
    var arr = [];
    x = x.toString();
    for (var i = 0; i < x.length; i++) {
        arr.push(x[i]);
    }
    var result = arr.reverse().join("");
    return x == result;
};