var n = +prompt('정수값: ');
var i = 1;
var message = '';
while (i <= n) {
    message += `${i}의 제곱은 ${i ** 2}\n`;
    i++;
}
alert(message);