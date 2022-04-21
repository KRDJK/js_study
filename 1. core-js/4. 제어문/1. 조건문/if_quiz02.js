var int = +prompt('정수를 입력하세요.');

if (int > 0) {
    alert('이 수는 양수입니다.')
} else if (int === 0) { //처음에 int=0이라고 실수함!!! 같냐고 물어볼거면 === 세번 써야지.
    alert('이 수는 0입니다.')
} else {
    alert('이 수는 음수입니다.')
}