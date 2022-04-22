var targetNum = +prompt('양의 정수: ');
var tnCopy = targetNum;

var digit = 0; //자리수를 기억할 변수

while (targetNum > 0) {
    targetNum = parseInt(targetNum / 10); 
    digit++;
}
console.log(`${tnCopy}은(는) ${digit}자리입니다.`);