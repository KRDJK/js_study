

// 정사각형의 높이
var height = +prompt('정사각형의 높이를 입력하세요.');
var star = ''; // 별 저장

for (var j = 0; j < height; j++) {
    for (var i = 0; i < height; i++) {
        star += '*\t';

}
    star += '\n'
}

alert(star);