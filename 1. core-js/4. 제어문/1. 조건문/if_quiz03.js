var num1 = +prompt('1번 정수를 입력하세요.');
var num2 = +prompt('2번 정수를 입력하세요.');
var num3 = +prompt('3번 정수를 입력하세요.');

if (num1 < num2 && num1 < num3) {
    alert(`최솟값은 ${num1}입니다.`);
} else if (num1 > num2 && num2 < num3) {
    alert(`최솟값은 ${num2}입니다.`);
} else if (num1 > num3 && num3 < num2) {
    alert(`최솟값은 ${num3}입니다.`);
}
// 다 같은 경우도 있을듯
else if (num1 === num2 && num1 === num3) {
    alert(`최솟값은 ${num1}입니다.`);
}

/* 쌤 버전 풀이 1번 버전

var min; //최소값 저장 변수 -->> 일단 선언만 해두는 것.
if (a < b) {
    if (a < c) {
        min = a;
    } else {
        min = c;
    }
} else {
    if (b < c) {
        min = b;
    } else {
        min = c;
    }
}
alert(`최소값은 ${min}입니다.`);

*/

/* 2번 풀이 if를 2번 검증하게! else if를 쓰면 하나 되면 끝이니까.

var min = a;
if (b < min) {
    min = b; 
}
if (c < min) {
    min = c;
}

alert(`최소값은 ${min}입니다.`);

*/ 