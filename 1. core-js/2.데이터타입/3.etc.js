// 논리 타입(boolean)
var logic = 10 < 5;
// 이 경우 10<5는 false이기 때문에 logic에 flase라고 대입(저장)됨.

console.log(typeof logic);
console.log(logic);

var x = true; // True (x) 이건 파이썬
var y = false; // False (x) 이것도 파이썬

var m = 'true' // 이 경우는 논리가 아닌 문자열(string)임.


// undefined 타입 ==>> 값 : undefined
var fruit;  // var fruit = ' '; ==>> 이 경우도 안넣은걸까? 결과는!! 아니다. 이 경우에는 빈 문자열을 넣은 것이다.
// 아직 저장 안한 상태로 alert을 해보면??

console.log(fruit); // 이럴 때 undefined가 나옴.
// 변수를 선언만 하고 초기화하지 않은 경우에 undefined가 나옴.



// null 타입 ==>> 값 : null
// 개발자가 의도를 가지고 값이 아예 없음을 표현.
var apple = '사과';
// apple이란 변수는 챙겨가면서 안에 대입한 '사과'라는 문자열 값은 없애고 싶을 때!!
apple = null;

// 없앤답시고 null 대신 0을 하면?? 0도 값이기 때문에 0이 저장되는 것! null은 아예 존재하지 않는 것!!
var money = 50000;
money = 0; // -> 아예 없애고 싶으면 0이 아니라 null을 입력했어야 함!


