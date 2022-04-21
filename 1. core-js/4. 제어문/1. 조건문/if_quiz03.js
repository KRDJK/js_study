var num1 = +prompt('1번 정수를 입력하세요.');
var num2 = +prompt('2번 정수를 입력하세요.');
var num3 = +prompt('3번 정수를 입력하세요.');

if (num1 < num2 && num1 < num3) {
    alert(`최솟값은 ${num1}입니다.`);
} else if (num1 > num2 && num2 < num3) {
    alert(`최솟값은 ${num2}입니다.`);
} else if (num1 > num3 && num3 < num2) {
    alert(`최솟값은 ${num3}입니다.`);
}