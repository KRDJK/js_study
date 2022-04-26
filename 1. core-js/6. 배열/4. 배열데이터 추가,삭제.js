
var pets = ['멍멍이', '야옹이', '짹짹이'];
console.log(pets);


// push() : 배열에 맨 끝에 데이터를 추가 (밀어넣어라.)
pets.push('어흥이');
pets.push('징징이', '꽥꽥이');

console.log(pets);
console.log(pets.length);

// pop() : 배열의 맨 끝 요소를 제거
pets.pop(); // 공란으로 두면 끝 요소를 알아서 제거.
pets.pop(); 
pets.pop(); 

// var count = 0;

// for (var i = 0; i < pets.length; i++) {
//     pets.pop();
//     // count++;
//     if (pets.length === 0) {
//         break;
//     }
// } 틀린듯 다시 생각해봐라.

// 쌤버전 다 지우기.
// while (pets.length > 0) {
//      pets.pop();
// }
// console.log(pets); 이러면 아무것도 안나오려나

console.log(pets);

// shift() : 배열의 맨 첫번째 요소 제거
pets.shift();
pets.shift();

console.log(pets);

// unshift() : 배열의 맨 앞에 요소를 추가
pets.unshift('꿀꿀이');
console.log(pets);