
// 2개의 정수를 전달하면 그 합을 구해주는 함수
function add2(n1, n2) {
    return n1 + n2;
}

function add3(n1, n2, n3) {
    return n1 + n2 + n3;
}

// n개의 정수를 전달하면 그 합을 구해주는 함수를 만들 수는 없을까??
// 하나로 묶어서 받자. 배열 또는 객체의 형태로!

function addAll(numbers) { // 사용자가 직접 배열을 만들어서 줘야함. ES6+와 차이점이 있다!
    var total = 0;
    for (var n of numbers) { // 배열에서 쓰는 for-of문
        total += n;
    }
    return total;
}

// ES6+ ~~~~~~~~~~~~~~~~~~~~~
function addAll2(...numbers) { // 사용자가 전달할 때 그냥 나열(배열이나 객체의 형태로가 아니라 ㅇㅇ).
    var total = 0;              // 그러면 함수가 그걸 배열이나 객체로 만들어줌.
    for (var n of numbers) {
        total += n;
    }
    return total;
}

var result1 = addAll([10, 20, 30, 40, 50]); // 대괄호를 빼면 10만 들어감.
console.log(`r1: ${result1}`);

var result2 = addAll2(10, 20, 30, 40, 50);
console.log(`r2: ${result2}`);


// ...을 이해해보자
console.log('안녕', '메롱', '잘가'); // log에 마우스를 올려보면 ...이 나옴.
