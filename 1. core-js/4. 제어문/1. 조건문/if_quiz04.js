alert('2개의 정수를 입력하세요.');

var num1 = +prompt('1번 정수를 입력하세요.');
var num2 = +prompt('2번 정수를 입력하세요.');

var result = num1 - num2

if (result < 0) {
    alert(`두 값의 차이는 ${-result}입니다.`);
} else {
    alert(`두 값의 차이는 ${result}입니다.`);
}

/*
풀이 1번.
//두 값의 차이를 구한다.
var diff = a - b;
if (a < b) {
    diff = -diff;
}


풀이 2번.
var diff = (a > b) ? a - b : b - a;

alert(`두 값의 차이는 ${diff}입니다.`);
*/