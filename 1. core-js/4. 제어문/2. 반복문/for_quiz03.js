var total = +prompt('몇 개의 *를 표시할까요? ');
var enter = +prompt('몇 개마다 줄바꿈을 할까요? ');

var star = ''; // 별을 저장할 변수.

for (var i = 0; i < total; i++) {
    if (i % enter === 0) {
        star += '\n';
    }
    star += '*';
}

alert(star);
