var n = +prompt('정숫값: ');

var start = 1;

var message = ''; // 연달아서 받아야 함.

var count = 0; // 약수의 개수를 저장할 변수.

while (start <= n) {
    if (n % start === 0) {
        message += start + '\n\n';
        count++;
    }
    start++;
}

alert(`${message}\n약수는 ${count}개 입니다.`);