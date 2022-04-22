var num = +prompt('정수값: ');
var i = 1;
var message = '';
while (i <= num) {
    if (i % 2 === 1) {
        message += i + ' ';
    }
    i++;
}
alert(message);