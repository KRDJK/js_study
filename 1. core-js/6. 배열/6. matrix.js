

// 2차원 배열 : 배열의 요소가 또다시 배열인 경우!!!
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var arr2d = [arr1, arr2, arr3, [10, 11, 12]];
console.log(arr2d);
console.log(arr2d.length); // 2차원 배열의 개수는 그 안에 들어있는 1차원 배열의 개수 합!

console.log('======================================');

console.log(arr2d[1]);
console.log(arr2d[3]);

console.log('======================================');

console.log(arr2d[0][2]);
console.log(arr2d[3][0]);

console.log('======================================');

arr2d[2][1] = 88; // 숫자 변환
console.log(arr2d);

arr2d[1] = [100, 200, 300]; // 배열째로 변환
console.log(arr2d);

console.log('======================================');

arr2d.splice(0, 1);
console.log(arr2d);

console.log('======================================');

arr2d[1].splice(1, 1);
console.log(arr2d);

arr2d[2].push(999);
console.log(arr2d);

console.log('======================================');

var result = arr2d[0] * arr2d[2]; // 배열 x 배열인데 연산이 될까?
console.log(result); // nan. 불가능 타입이 배열이라

var result2 = arr2d[0][1] * arr2d[2][0]; // 타입이 숫자라서 연산 가능.
console.log(result2);

// arr2d[1][1].pop();  // 불가능!! 숫자타입이라서
arr2d[2].pop(); // pop은 배열 중에서 맨 마지막 것을 없애는 것.
console.log(arr2d);

arr2d.pop();
console.log(arr2d);

console.log('======================================');

var arr2d_2 = [
    ['a', 'b', 'c'],
    ['가', '나', '다'],
    ['D', 'E', 'F']
];

for(var arr of arr2d_2) { // for - of 문은 length 만큼 loop 한다.
    for (var s of arr) { // arr의 타입은 1차원 배열
        console.log(s);
    }; 
}

// 3차원 배열
console.log('======================================');

var arr3d = [
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
    ],
    [
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ],
    [
        [17, 18, 19, 20],
        [21, 22, 23, 24]
    ]
];

console.log(`arr3d의 길이: ${arr3d.length}`);
console.log(arr3d[0]);
console.log(arr3d[1][1]);
console.log(arr3d[0][1][2]);

// 1차원 : 1명 학생의 4과목 시험 점수
// 2차원 : 1학급 5명 4과목 시험 점수
// 3차원 : 1학년 3학급 6명 7과목 시험 점수

