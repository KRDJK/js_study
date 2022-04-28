
function makeLine() {
    console.log('==========================================');
}

// 원의 넓이를 구해야 한다. (빈번하게) : pi * r ** 2
var pi = 3.14159265;

// 반지름이 5인 원의 넓이
var circle1 = pi * 5 ** 2;

// ~~~ 200줄 ~~~

// 반지름이 17인 원의 넓이
var circle2 = pi * 17 * 2; // 제곱해야 하는데 2를 곱해버림. 실수 충분히 할 수 있음.


// 원의 넓이를 구해주는 함수 정의
function calcAreaCircle(r) {
    return pi * r ** 2;
}

var result1 = calcAreaCircle(5);
console.log(result1);

makeLine();

var result2 = calcAreaCircle(17);
console.log(result2);

