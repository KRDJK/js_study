var num = +prompt('정숫값: ');

var start = 1;
var odd = '';

while (start <= num) {
    if (start % 2 === 1) {
        odd += ` ${start}`;
    }
    start++;
}


alert(`${odd}`);