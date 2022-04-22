var number = +prompt('정수를 입력하세요.');


var mark = ''
var start = 1
if (number > 0) {
    while (start <= number) {
        if (start % 2 === 1) {
            mark += '+';
        } else {
            mark += '-';
        }
        start++;
    }
}

alert(`양의 정수:${number}\n${mark}`);