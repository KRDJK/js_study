alert('3개의 정수를 입력하세요.');

var num1 = +prompt('A번 정수를 입력하세요.');
var num2 = +prompt('B번 정수를 입력하세요.');
var num3 = +prompt('C번 정수를 입력하세요.');

if (num1 === num2 && num1 === num3) {
    alert('3개 값이 모두 같습니다.')
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
    alert('2개 값이 같습니다.')
} else if (num1 !== num2 && num1 !== num3) {
    alert('3개 값이 모두 다릅니다.') // 그냥 else로 써도 됐음.
}

// num1 === num2 === num3 이런 식으로 했다면 안됨.
// 만약에 위 결과가 됐다면 js의 암묵적 행변환에 의해 되었을 것.
