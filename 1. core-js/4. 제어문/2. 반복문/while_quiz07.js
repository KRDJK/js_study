
var num = prompt('양의 정수를 입력해주세요: ');

var numCopy = num

var start = 1;
var result = ''; // 나머지들을 문자열로 더해줘야 하니까 이렇게 해보자.

while (start <= num) {
    result += start % 10;
    start++;
}


alert(`${result}`);