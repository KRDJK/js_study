
/*

var userName;
userName = '김철수';
console.log(`${userName}님 안녕하세요~ 방가방가!`);
console.log(`${userName}님 오늘도 즐거운 하루 되세요!`);

// ~~~~ 1000줄 코드 ~~~~

userName = '박영희';
console.log(`${userName}님 안녕하세요~ 방가방가!`);
console.log(`${userName}님 오늘도 즐거운 하루 되세요!`);

// ~~~~ 2000줄 코드 ~~~~

userName = '홍길동';
console.log(`${userName}님 안녕하세요~ 방가방가!`);
console.log(`${userName}님 오늘도 즐거운 하루 되세요!`);

// 나중에 수정할 때 console.log(''); 텍스트들을 하나하나 바꾸려면 개비효율!!

*/

// 함수 정의 (함수를 만든다. => 변수 '선언' 선언이라고 하는 것과 비슷한 맥락) 
function callUserName(userName) {
    if (typeof userName === 'number') {
        console.log('숫자로된 이름은 안됩니다~~');
        return; // 함수의 탈출문 (반복문의 break와 같은 효과.)
    }
    console.log(`${userName}님 hello~ 반갑습니다!`); // 한번만 바꾸면 이후에 쓸 때도 바뀌어 나옴.
    console.log(`${userName}님 오늘도 즐거운 하루 되세요!`);
    console.log('========================================');
}

// 함수 호출 (함수를 사용한다. => function-call)
callUserName('박찬호');
callUserName('김영희');

// ~~~~ 1000줄 ~~~~
callUserName('둘리');
callUserName(100);