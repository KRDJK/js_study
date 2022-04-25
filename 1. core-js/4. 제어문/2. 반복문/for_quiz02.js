alert('옆으로 긴 직사각형을 그립니다.');
var first = +prompt('변의 길이를 입력하세요 1: ');
var second = +prompt('변의 길이를 입력하세요 2: ');

var star = ''; // 별을 저장할 변수.

if (first < second) {
    var empty = first;
    first = second;
    second = empty;
}

for (var k = 0; k < second; k++) {
    for (var i = 0; i < first; i++) {
        star += '*  ';
}
    star += '\n';
}

alert(star);