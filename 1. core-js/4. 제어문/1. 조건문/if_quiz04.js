alert('2개의 정수를 입력하세요.');

var num1 = +prompt('1번 정수를 입력하세요.');
var num2 = +prompt('2번 정수를 입력하세요.');

var result = num1 - num2

if (result < 0) {
    alert(`두 값의 차이는 ${-result}입니다.`);
} else {
    alert(`두 값의 차이는 ${result}입니다.`);
}