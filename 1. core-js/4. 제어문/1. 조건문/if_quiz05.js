alert('3개의 정수를 입력하세요.');

var num1 = +prompt('A번 정수를 입력하세요.');
var num2 = +prompt('B번 정수를 입력하세요.');
var num3 = +prompt('C번 정수를 입력하세요.');

if (num1 === num2 && num1 === num3) {
    alert('3개 값이 모두 같습니다.')
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
    alert('2개 값이 같습니다.')
} else if (num1 !== num2 && num1 !== num3) {
    alert('3개 값이 모두 다릅니다.')
}