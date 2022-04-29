/*
    Q3)
    1개의 정수를 전달받아 해당 정수의 
    3제곱 값을 반환하는 함수 cube를 작성하시고

    사용자에게 숫자를 입력받은 후
    cube를 호출하여 3제곱값을 출력하세요.
*/

function cube(num) {
    return num ** 3;
}

var answerNum = +prompt('1개의 정수를 입력하세요.');

alert(`입력하신 수: ${answerNum}\n${answerNum}의 3제곱 값은 ${cube(answerNum)}입니다.`);
