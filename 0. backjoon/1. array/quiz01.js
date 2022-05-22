// let numbers = [];

// numbers.push(+prompt('정수를 입력하세요.'));

/*
while (true) {
    let inputNum = prompt('정수를 입력하세요.\n 그만 입력하려면 \'그만\'을 입력하세요.');
    
    if (inputNum === '그만') {
        break;
    }
    
    numbers.push(+inputNum);

}

let min = numbers[0];

for (let i=0; i < numbers.length; i++) {
    if (min > numbers[i]) {
        min = numbers[i];
    } 
}

// alert(`입력한 숫자들: ${numbers}`);
// alert(`입력한 숫자 중 최소값: ${min}`);

*/

let numbers = [];

let tryNum = +prompt('몇 개의 정수를 입력하실건가요??');

for (let i=1; i <= tryNum; i++) {
    let inputNum = +prompt(`${i}번째 숫자를 입력해주세요.`);
    numbers.push(inputNum);
}

let min = numbers[0];

for (let i=0; i < numbers.length; i++) {
    if(min > numbers[i]) {
        min = numbers[i];
    }
}

console.log(min);