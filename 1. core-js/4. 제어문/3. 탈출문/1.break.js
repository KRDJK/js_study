for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break; // 반복문을 즉시 탈출하라! end for로 바로 감.
    }
    console.log(i);    
} // end for

console.log('반복문 끝!');

console.log('================================================');


for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        if (i === j) {
            break;
        }
        console.log(`${i}, ${j}`);
    } // end inner for
} // end outer for
    

console.log('================================================');

var m = 0;
while (++m < 10) {
    console.log(m);
    if (m % 3 === 0) break;
}

// m++ 이면 0인 상태로 10과 비교하고 비교 후, 수를 올린다.
// 그런 후, 콘솔로그로 내려감.


console.log('================================================');

var n = 0;
while (n++ < 5) {
    console.log(n);
}

console.log(`반복문 끝! 종료시 n은 ${n}.`);