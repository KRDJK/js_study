// 구구단 5단 출력
var level = 5; // 구구단 수 여기선 5단이니까 5
var n = 1;
while (n <= 9) {
console.log(`${level} x ${n} = ${level*n}`);
n++;
}

console.log('================================');

// 1 ~ 20 사이의 정수 중 홀수만 출력
// var m = 1;
// while (m <= 20) {
//     console.log(m);
//     m += 2;
// }
// 패턴
// console.log(1);
// m += 2;
// console.log(3);
// m += 2;
// console.log(5);
// m += 2;
// console.log(7);

var m= 1;  // 1 < a < 5 라고 수학식 사고로 쓰면 안됨. 이러면 좌항 검사 후 그 결과를 또 우항과 검사함. 원하는 결과가 제대로 나오지 않음.
while (m <= 20) {
    if (m % 2 === 1) { // 2로 나누었을 때 나머지가 1이면 홀수다.
        console.log(m);
    }
    m++;
}

console.log('=====================');

// 18 ~ 32 사이의 3의 배수만 출력
var t = 18;
while (t <= 32) {
    if (t % 3 === 0) {
    console.log(t);
}
t++;
}

// 1 ~ 4000 사이의 정수 중 12의 배수의 개수.
var start = 1;
var ea = 0; // 12배수의 개수
while (start <= 4000) {
    if (start % 12 === 0) {
        ea += 1;
    }
    start++;
}

console.log(`총 개수: ${ea}개`);