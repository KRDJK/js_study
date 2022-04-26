
/*
    콘솔창에 배열의 요소들을 순회하여
    ~~~~~~
    월요일
    화요일
    ...
    일요일
    ~~~~~~
    을 출력하세요. (for-of문, for문 둘 다 만들어보세요.)
*/


var dayOfWeeks = ['월', '화', '수', '목', '금', '토', '일'];

for (var i = 0; i < dayOfWeeks.length; i++) {
    console.log(`${dayOfWeeks[i]}요일`);
}

console.log('====================================================');

var day = '';
for (var n of dayOfWeeks) {
    day += (`${n}요일\n`);
}

console.log(day);

/* 
    더 간단한 방법!! index를 조정할 필요가 없을 때 더 효율적. but, 정답은 아님. 꼭 이렇게 해야하는건 아님.
    for (var day of dayOfWeeks) {
        console.log(`${day}요일`);
    }
*/

console.log('====================================================');



var foods = ['짜장면', '짬뽕', '볶음밥', '마라탕', '탕수육'];
var total = '';

for (var i = 0; i < foods.length; i++) {
    if (i === (foods.length - 1)) {
        total += (`${foods[i]}!!`);
        break;
    } 
    total += (`${foods[i]}과 `);
}
console.log(`${total}`);