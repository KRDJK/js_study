var number = +prompt('정수를 입력하세요.');

var star = ''
var starEa = 1


if (number > 0) {
    while (starEa <= number) {
        star += '*\n\n'
        starEa++;
    }
    alert(`양의 정수: ${number}\n${star}`);
} else {
    alert('양수가 아닌 수는 표시할 수 없습니다.')
}


