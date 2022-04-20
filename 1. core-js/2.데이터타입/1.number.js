
var decimal = 100; //숫자타입 변수

// typeof 연산자 : 변수에 저장된 값의 타입을 알려줌.
console.log(typeof decimal);


var float = 3.14; // 실수 -> 숫자타입
console.log(typeof float);


// js는 모든 숫자데이터를 실수값으로 처리한다.
// 확인하고 싶으면 나눗셈을 해보면 된다.
console.log(10 / 4);
// fact는 2.5지만, 다른 언어의 경우 2라고 출력함.

// 다른 언어의 경우 2.5를 출력값으로 보고 싶다면,
// console.log(10.0 / 4.0); 으로 입력했어야함.

// 굳이 2진수로 표현하고 싶을 때는 접두어 0b를 붙인다. // 2진수값 저장
var binary = 0b1001;
console.log(binary); // 10진수로 자동 변환됨.



// NaN : 산술연산 불가능을 표현하는 값.
console.log(10/'메롱');