function fib(max) {
    var t, a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr;
}

console.log(fib(5));
console.log(fib(10));

function* fibnaqie(max) {
    var t, a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n++;
    }
    return;
}
var f = fibnaqie(5);

console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());