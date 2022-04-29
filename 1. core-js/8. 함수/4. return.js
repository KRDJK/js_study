// 함수 정의(선언)부 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// return은 함수의 탈출문이다.
function add(n1, n2) {
    console.log(`${n1} + ${n2} = ${n1+n2}`);
    return n1 + n2;
    // 여기에 어떤 코드들을 쓰더라도 실행이 되지 않음. why? 위에 return이 있어서!
}

function multi(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1*n2}`);
}

function callName(nickName) {
    //금지어 리스트
    var prohibits = ['바보', '멍청이', '도라이'];
    if (prohibits.includes(nickName)) {
        console.log('나쁜말 닉네임은 안돼요!');
        return; // 함수 강제 종료. (break는 반복문에서 쓰는거.)
    }
    console.log(`${nickName}님 안녕하세요!`);
} // 리턴값이 없으므로 단독 호출로 써라.


function foo() {
    var n = 1;
    while (n < 5) {
        if (n === 3) {
            return; // 함수 안에 있는 반복문에서는 return;을 써도 똑같이 탈출을 하긴 함.
        }           // break는 반복문을 나가지만, return은 함수 실행 자체를 끝내버림.
        console.log(`${n}!!`);
        n++;
    } // end while    !! break로 탈출한 지점
    console.log('반복문 끝!!');
} // end function foo    !! return으로 탈출한 지점.


// =================================================================== //



// 함수 호출부
// return 값이 없는 함수는 변수에 저장하면 안됨 !! undefined로 나오니까.

var r1 = add(10, 20); // 더한 값을 가져왔음.
var r2 = multi(5, 3); // 곱한 값을 가져오지 못함. 뭐 가져온게 없음.
// 리턴 값을 넣어주지 않았을 때 무슨 일이 생기는지는 변수에 넣어보면 체감이 된다.

console.log(`r1: ${r1}, r2: ${r2}`); // r2에는 가져온게 없기 때문에 undefined가 나옴.

console.log('=====================================================');

var r3 = multi(add(2,4), add(5,1));
                //add가 먼저 실행됨.
// var r3 = multi(6, add(5,1));
// var r3 = multi(6, 6);

console.log(`r3 : ${r3}`);

console.log('=====================================================');

// 리턴값이 없는 함수는 다른 함수의 인수로 사용할 수 없음.
// 하단에 multi(3,2) 부분이 리턴값이 없는 함수.

var r4 = add(multi(3, 2), add(4, add(6,3)));
// var r4 = add(undefined, add(4, add(6,3)));
// var r4 = add(undefined, add(4, 9));
// var r4 = add(undefined, 13);

console.log(r4);

console.log('=====================================================');

callName('도우너'); // 컨트롤 + 함수 이름 클릭하면 선언부로 감.
callName('바보');

foo();

console.log('=====================================================');

// 함수의 리턴값은 언제나 하나!!! (함정! 배열이나 객체도 하나로 취급한다.)
// 2개의 정수를 전달받아서 + - * / 4가지 값을
// 리턴받고 싶다!! 가능한가?!

function operateAll(n1, n2) {
    // 변수를 만들어 담고 그 변수를 리턴에 했었는데 그 변수를 안에서 1번만 쓰면 굳이? 걍 다이렉트로 리턴으로 가라
    return {
        plus: add(n1, n2), // 이것도 가능
        minus: n1-n2, 
        multi: n1*n2, // multi 함수는 못씀~! why? multi 함수의 값이 undefined 잖아. 
        divide: n1/n2,
    }; // 2차원 배열 또는 객체 안에 객체or배열 이런 식으로 계속 하나의 박스를 큰 박스를 추가해서 그 가장 큰 박스 하나를 리턴!
}

var resultList = operateAll(10, 5); // 리턴값이 있으므로 변수에 담아도 됨.
// 타입은 배열 타입이 됨.

// console.log(resultList[1]);
// console.log(resultList[2]);
console.log(resultList.minus);
console.log(resultList.multi);