
// 문자 타입으로 암묵적 변환

var ex1 = 10 + '20';
console.log(typeof ex1);
console.log(ex1);

var ex2 = '' + 300;
console.log(typeof ex2); 

var ex3 = false + '';
console.log(`ex3 type: ${typeof ex3}`);
console.log(ex3);

var ex4 = 'hello' + 10 + 20; // hello1020
var ex5 = 10 + 20 + 'hello'; // 30hello
var ex6 = 'hello' + (10 + 20); // hello30

// 숫자타입으로 암묵적 변환

// var x = 10 - '3';
// 원래 이건 연산이 되면 안되는게 맞음.
// but, js에서는 3을 숫자로 바꾸어줌. 주의!! '' 문자열 안에 순수하게 숫자가 들어가 있어야만 숫자로 변환해줌.

var ex6 = 10 - '7';
console.log(`ex6: ${ex6}`);

var ex7 = '50' * '3'; 
// 둘 다 문자인데도 이걸 바꿔줘..? 미쳤네? 주제넘게 친절을 표시해.
// ''안에 순수한 숫자가 들어가있으면 문자열을 암묵적으로 숫자로 변환.
console.log(`ex7: ${ex7}`);

console.log('===============================================');

console.log(+'');
console.log(+'100');
console.log(+true);
console.log(+false);
console.log(+null); // 이건?? 0