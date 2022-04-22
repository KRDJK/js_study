var lower = +prompt('몇 cm부터 : '); //키 시작점
var upper = +prompt('몇 cm까지 : '); //키 끝점
var step = +prompt('몇 cm마다 : '); //키 격차

var height = lower; //키를 저장할 변수

var message = '';
while (height <= upper) {
    var weight = (height - 100) * 0.9;
    message += `${height}cm ${weight}kg\n`;
    height += step;
}
alert(message);