
// 명시적 문자열 변환
var a = 10, b = 20;

// var result = '' + a + b; // 제일 많이 쓰는 방법
// var result = String(a) + String(b); 
var result = a.toString() + b.toString();

console.log(result);

// 명시적 숫자 변환
console.log('====================================');

var m = '10', n = '5.5'

// var result2 = +m + +n; // 제일 간단한 방법.
// var result2 = Number(m) + Number(n);
var result2 = parseInt(m) + parseFloat(n); // 
//정수 추출을 원하면 parseInt
console.log(result2);

// 명시적 논리 변환
console.log('====================================');

var logic = null;
// var result3 = Boolean(logic);
var result3 = !!logic;

console.log(result3);