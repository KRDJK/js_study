var start = 1;

// start = 0 으로 해놓고 start < 5 로 하는게 더 편할 것임..
while (start <= 5) { // start를 0으로 해도 되긴 함. 0, 1, 2, 3, 4
    console.log('안녕');
    start++;
}

// for 문
for (var start = 0; start < 5; start++)
    console.log('안녕');



console.log('===================================================');

// 5 ~ 0 카운트 다운

for (var m = 5; m >= 0; m--)
    console.log(`${m}!!`);

    
console.log('===================================================');

// 1 ~ 10 까지의 총합
    
    var total = 0 // 총합을 저장할 변수.
    var k = 1; 
    
while (k <= 10) {
    total += k;
    k++;
}

console.log(`총합: ${total}`);

// for 문으로 변환.
var total = 0; //총합을 저장할 변수
for (var k = 1; k <= 10; k++) {
    total += k;    
}
console.log(`총합: ${total}`);
console.log('======================');