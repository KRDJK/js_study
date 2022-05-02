
// 1. 중복 선언을 허용하지 않음
let x = 10;
// let x = 100; ==>> 변경하고 싶으면 x = 100;이지.
console.log(x);


// 2. 블록레벨 스코프 지원
let y = '안녕';
if (true) {
    let y = '잘가';
    // console.log(y);
}
console.log(y);


// 3. 변수 호이스팅을 일으키지 않음.
// var z;
z = 100; // var z를 지멋대로 선언해줌.
console.log(z);

let z;