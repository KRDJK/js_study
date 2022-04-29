/*
    Q6)
    1. 1개의 정수 n을 전달받아 n의 약수들을 출력하고 
    약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
    2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.

    - 호출 예시 : calcDivisor(10);

    10의 약수: 1 2 5 10
    10의 약수의 개수: 4개
      
*/

function calcDivisor(n) {
    var ea = 0; // n의 약수 개수를 저장할 변수
    var divisorArray = []; // n의 약수들을 저장할 변수.
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            ea++;
            divisorArray.push(i);
        }
    }
    alert(`${n}의 약수: ${divisorArray}\n${n}의 약수의 개수: ${ea}개`);
}

// 호출부
var answer = +prompt('1개의 정수를 입력하세요.');

calcDivisor(answer);