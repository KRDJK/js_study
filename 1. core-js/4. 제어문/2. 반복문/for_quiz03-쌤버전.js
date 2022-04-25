//총 별의 숫자
var starNum = 33;
//줄바꿈할 별의 개수
var width = 5;
var star = '';

//총 줄 수 구하기
var line = parseInt(starNum / width); // 몫 구하기. 그냥 나누면 실수 나눗셈이 되니까!

for (var i = 0; i < line; i++) {
    for(var j = 0; j < width; j++) {
        star += '*';
    }
    star += '\n';
}

//남은 별의 개수 구하기
var rest = starNum % width;

if (rest > 0) {
    for (var k = 0; k < rest; k++) {
        star += '*';
    }
}
console.log(star);