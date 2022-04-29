
// 함수 정의부

// 함수 정의 기본
function add(n1, n2) {
    return n1 + n2;
}


// 함수 정의 기본 2
// 함수 리터럴 (함수를 값으로 표현)
var sub = function(n1, n2) { // 이름이 sub인 함수처럼 행동함.
    return n1 - n2;
}; // 값 취급이라 뒤에 ; 이 붙음.

var plus = add; // 함수 이름만 쓰면 그 함수를 또 변수에 저장할 수 있다.


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
활용법!!!!! 첫 함수를 정의할 때는 구체적으로 지어라.
근데 너무 귀찮아.. 매번 이렇게 긴 함수 이름을 불러와가면서 써야해?
no!!!

[예시]
function removeBoardArticleWithReplyText() {

}

var rb = removeBoardArticleWithReplyText;
rb();
[/예시]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// 화살표 함수 (ES6+) (arrow function)
function multiply(n1, n2) {
    return n1 * n2;
}

var multiply = function(n1, n2) { // 익명함수를 변수에 넣는다. 위와 같은 방법!
    return n1 * n2;
};

// 함수의 내용물이 return은 딱 하나(return 문장만 있을 경우!!)일 경우 return 생략가능.
var multiply = (n1, n2) => n1 * n2; // 이것도 위에 2개와 같이 똑같은 함수를 만드는 방법!!!!


var sayNickName = function(nick) {
    console.log(`${nick}님 안녕~~`);
    return nick + '메롱~';
}

var sayNickName = (nick) => {    // 화살표 함수 변환 공식 : function을 제거하고 소괄호와 중괄호 사이에 => 을 넣으면 된다.
    console.log(`${nick}님 안녕~~`);
    return nick + '메롱~';
}

var hello = function() {
    console.log('hello!!!');
}

// 만약에 함수의 코드가 단 한개의 문장이라면 중괄호 생략이 가능하다.
var hello = () => console.log('hello!!!'); // 소괄호는 생략 불가. 없어도 써줘야 함.

// 틈새 quiz
// 정수 1개를 전달하면 해당 점수의 제곱값을 리턴하는 화살표함수 sqrt를 작성해봐라.
var sqrt = (n) => n ** 2; // 내가 만든 ver
var sqrt = n => n ** 2; // 소괄호 요소가 하나면 소괄호도 생략 가능.

var sqrt = function(n) {
    return n ** 2;
}

console.log(sqrt(4));


// 중첩 함수
function outer() {
    console.log('outer call!');

    function inner() {                    // inner는 outer에게 보호받음.
                                         // 자동차에 시동 버튼을 누르면 일어나는 연쇄 반응들이 순서대로 일어나야 하는데, 엉키면 안되므로 묶어 놓은 것처럼!!!
        console.log('inner call!'); 
    }
    
    inner();
    inner();
} // outer의 블록 내부에서만 inner를 호출할 수 있다.


// 재귀 함수(Recursive)  내가 나 자신을 call한다..? 잘 짜서 쓸 자신이 없으면 반복문을 써라 걍.. 웬만하면 반복문으로 다 대체 가능함.
function countdown(n) { // 시험 문제로 잘 나옴.. 까다롭기 때문에..!!
    if (n < 0) {
        return;
    }
    console.log(`${n}!!`);
    countdown(n-1);
}


/*
    function compute(num) {
        if (num <= 1) return num;
        return compute(num - 1) + compute(num - 1);
    }

문제!!
var r = compute(4); // r = ? 
무려 정답률 7%..

풀이 과정
compute(4) ->  return compute(3) + compute(1)
compute(3) ->  return compute(2) + compute(0)
compute(2) ->  return compute(1) + compute(-1)
compute(1) ->  return 1;
compute(0) ->  return 0;
compute(-1) -> return -1;

----------------------------------------

compute(4) ->  return 0 + 1 = 1
compute(3) ->  return 0 + 0 = 0
compute(2) ->  return 1 + -1 = 0
compute(1) ->  return 1;
compute(0) ->  return 0;
compute(-1) -> return -1;

*/

//=====================================================//


// 코드 실행부 (실행부 조차도 함수 안에 묶는게 좋다고 한다.. 음..?)
// 즉시 실행 함수  ==>> 익명 함수 (어나니머스 펑션)
(function () {
    var a = 10, b = 20;
    console.log(a + b);

    console.log('==============================');
    
    console.log(typeof sub);

    console.log(sub(10, 3));
    console.log(typeof plus);
    console.log(plus(20, 30));
    
    hello();
    hello();
    hello();
    
    
    console.log('==============================');

    outer(); 
    // outer 안에 inner 함수도 만들었는데 안뜨는 이유는 함수는 어쨌든 호출하지 않으면 뜨지 않음.
    // inner();      // outer함수의 전용함수라서 outer 밖에서는 호출되지 않음.


    countdown(5);

})();
// 모든걸 함수 안에서 해결하려고 하는게 좋다..?

