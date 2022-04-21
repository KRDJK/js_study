// && : AND 연산
// 양쪽 항 모두 참이면 전체 연산결과가 참이다.
var t = true, f= false;

// 로그인할 때를 생각해보면 쉽게 이해 가능하다.
// 아래 &&의 좌항을 아이디, 우항을 패스워드로 보고 비교해보자.
console.log(t && t); // t
console.log(t && f); // f
console.log(f && t); // f
console.log(f && f); // f

console.log('========================');

// || (쉬프트 + 백슬래시) : OR 연산
// 양쪽 항 중에 한 쪽만 참이어도 전체결과가 참이다.

// 면접, 포트폴리오 둘 중에 하나만 좋아도 뽑겠다.
console.log(t || t); // t
console.log(t || f); // t
console.log(f || t); // t
console.log(f || f); // f

console.log('========================');

// ! : NOT 연산 (논리 반전)
console.log(!t); // 단항 연산자, 결과값은 false 풀어서 쓰면 not true인거임.


//예시
var money = 0;
if (!money) {  //만약에 돈이 없으면 돈이 없어요를 출력해라
    console.log('돈이 없어요~');
} else {
    console.log(`돈이 ${money}원 있어요`);
}

