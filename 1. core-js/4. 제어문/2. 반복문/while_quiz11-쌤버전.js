// var n = +prompt('몇 개의 *를 출력할까요?');

var n = 12;
var i = 1;
var result = '';
while (i <= n) {
    result += '*'; // 계속 쌓다가 5의 배수일 때만 하게끔 하셨. 이게 더 연산을 줄이긴 할듯.
    if (i % 5 === 0) {
        result += '\n';
    }
    i++;
}
// alert(result);
console.log(result);