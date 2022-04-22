var n = +prompt('n의 값: ');

var start = 1;

var message = '';

var squre;

while (start <= n) {
    squre = (start * start); // ${start ** 2}로도 변환 가능.
    message += `${start}의 제곱은 ${squre}\n`;
    start++;
}

alert(`${message}`);