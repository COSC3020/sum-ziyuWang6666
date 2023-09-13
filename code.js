function sum(a) {
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
console.log(sum([1,2,3]));
//get help from instructor: npm install jsverify module
