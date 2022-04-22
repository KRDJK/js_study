// 행위를 몇 번 했는지 세라고?? 어떻게..??

// 자릿수를 세어야 할 정수
var targetNum = +prompt('양의 정수: ');
var tnCopy = targetNum; //원래 숫자를 백업


// 자릿수를 나눈 횟수를 저장할 변수
var count = 0;// 문자로 저장할게 아니니까 일단 이렇게 둬보자.

while (targetNum > 0) {
    targetNum = parseInt(targetNum / 10);
    count++;
}


alert(`${tnCopy}은(는) ${count}자리입니다.`);