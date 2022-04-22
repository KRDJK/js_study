var number = +prompt('정수를 입력하세요.');

var numberStar = number;
var starEa = 1;

var star = '' // 빈 문자열을 놓는다.. 개어렵네 ' ' 이건 공백이 안에 있는거임.
var result


if (number > 0) {
    while (starEa <= numberStar) { // 그냥 number로 해도 됐겠는데?
        star += '*';
        starEa++;
    }
    alert(`양의 정수: ${number}${star}`);
} else if (number === 0) {
    alert('양의 정수가 아닌 0입니다.');
} else {
    alert(`양의 정수가 아닌 음수 ${-number}입니다.`);
}