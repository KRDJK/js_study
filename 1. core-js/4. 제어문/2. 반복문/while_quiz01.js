var A = +prompt('첫번째 정수를 입력하세요.');
var B = +prompt('두번째 정수를 입력하세요.');

// 값 스위칭
// if (A > B) {
//     A = B;
//     B = A;
// } <<-- 틀린 방법

// 값 스위칭 옳은 방법 (주스 잔 2개의 내용물을 서로 바꾸고자 할 때 어케 하냐!!!! 빈 컵을 하나 준비한다.)
if (A > B) {
    var empty = A;
    A = B;
    B = empty;
}

var result = 0
var a = A


while (a <= B) {
    result += a ;
    a++;
}


alert(`${A} ~ ${B}까지의 누적합: ${result}`);