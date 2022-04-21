
var age = 5;

// if 뒤에는 항상 괄호! 괄호 안에는 true,false가 판단될 수 있게!
if (age >= 20) {
    console.log('성인입니다.');
} else if (age >= 17) { //else if는 무제한으로 덧붙일 수 있음.
    console.log('고딩입니다.');
} else if (age >= 14) {
    console.log('중딩입니다.');
} else if (age >= 8) {
    console.log('초딩입니다.');
} else {
    console.log('아동입니다.');
}

// 맨 처음 if 부터 순차적으로 내려가면서 조건과 맞는지를 확인함.
// 따라서 else if가 많아질수록 과부하가 걸림.
// 스위치라는게 있다고 함.

// else if가 아닌 그냥 if를 써서 했다면,
// 25살의 나이인 경우 하위 if들까지 다 true가 되어
// 결과값을 다 출력해냄.
// else if를 쓰면 맨 위 if로 그룹이 묶이면서 하나에서 true 값이 걸리면
// 하위는 연산하지 않음.