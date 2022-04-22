// 뒤집어야 할 정수
var targetNum = +prompt('양의 정수: ');
var tnCopy = targetNum; //원래 숫자를 백업

if (targetNum > 0) {
    // 뒤집힌 숫자를 저장할 변수
    var reverseNum = '';

    //더 이상 나눌 수 없을 때까지 반복
    while (targetNum > 0) {
        // 10으로 나눈나머지가 1의자리수를 의미하므로
        // 1의자리수를 reverseNum에 지속해서 연결
        reverseNum += targetNum % 10; // reverseNum은 문자열이라서!! ''+3+6+9+1 = '3691'
        // 10으로 나눈 몫을 갱신하면 1자리수씩 줄어드는
        // 효과가 되므로 자리수를 계속해서 줄여나감
        targetNum = parseInt(targetNum / 10);
    }

    alert(`${tnCopy}를 거꾸로 읽으면 ${reverseNum}입니다.`);
} else {
    alert('양의 정수만 입력해주세요.');
}