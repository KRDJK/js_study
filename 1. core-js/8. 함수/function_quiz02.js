
/*
    n개의 정수를 전달받아 그 중 최소값을 
    반환하는 함수 min을 정의하고,
    사용자에게 반복해서 숫자들을 입력받은 후
    min을 호출하여 최소값을 출력하세요.
    입력을 그만둘 때는 '그만'이라고 입력하도록 코드를 작성하세요.
*/

function min(numbers) { // 배열의 형태로 받아야함. ex: [1, 2, 3]
    var minNum = numbers[0]; // 가장 최소값을 저장할 변수. 0번 index를 최초의 최소값으로 가지고 해보자.
    for (var n of numbers) { 
        if(n < minNum) {
            minNum = n;
        }
    }
    return minNum;
}

// 호출부
var answers = []; // answer를 쌓을 배열이 또 필요하겠다.
while (true) {
    var answer = prompt('정수를 입력하세요. 그만하시려면 \'그만\'을 입력하세요.');
    if (answer === '그만') {
        break;
    } else {
        answers.push(Number(answer));
    }
}

alert(`최소값: ${min(answers)}`);