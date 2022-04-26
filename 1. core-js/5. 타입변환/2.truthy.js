// falsy

if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ('') console.log('ok4');
if (NaN) console.log('ok5');

console.log('===========================');

// Truthy
if (1) console.log('ok6');
if (-77.999) console.log('ok7'); // 0 빼고는 양,음,실수 할거 없이 다 true
if ('메롱') console.log('ok8');
if ('  ') console.log('ok9');
if ([1,2,3]) console.log('ok10');
if ([]) console.log('ok11');

console.log('===========================');

var num = 6; // 
if (num % 2) { // 명시적으로 === 1 이라고 해주는게 좋다.
    console.log('홀수입니다.');
} else {
    console.log('짝수입니다.');
}

console.log('===========================');

var apple = 10; // 0만 아니면 다 true처리라서
if (apple) { // 만약 if (!apple) 이라고 한다면, 반대가 되어야 함.
    console.log(`사과가 ${apple}개 있습니다.`);
} else {
    console.log('사과가 하나도 없습니다.');
}

console.log('===========================');

var result; // undefined

if (result) {
    console.log('안녕!');
}


/*
var n = 99;
while (n) {
    // true니까 무한루프임.
}
*/