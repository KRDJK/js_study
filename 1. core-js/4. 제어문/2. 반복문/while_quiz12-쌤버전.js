var n = +prompt('정수값: ');
var i = 1;
var count = 0; //약수의 개수 저장
var message = '';
while (i <= n) {
    if (n % i === 0) {
        message += i + '\n';
        count++;
    }
    i++;
}
message += `약수의 개수는 ${count}개입니다.`;
alert(message);