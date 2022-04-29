/*
    Q5)
    n개의 정수와 탐색할 정수를 전달받아 
    탐색할 정수가 n개 중에 있다면 
    몇개 있는지 반환하고, 각각 몇번 인덱스에
    있는지 아래 그림과 같이 출력하세요.
    
*/

function count(numbers, searchNum) { // 정수그룹 ex : [0, 1, 2, 1] | 찾을 값 : 1
    var ea = 0; // 개수를 저장할 변수.
    for (var n of numbers) {
        if (n === searchNum) {
            ea++;
        }
    }
    return ea;
}


// 호출부
alert('정수를 입력하여 정수 그룹을 생성해주세요.\n정수를 그만 추가하고 싶으면 \'그만\'이라고 입력해주세요.');

var answers = []; // ex : [0, 1, 2, 1]

var vxNum = 0;

while (true) {
    var answer = prompt(`vx[${vxNum}]: `);
    if (answer === '그만') {
        var searchNum = +prompt('찾을 값: '); // ex : 1
        break;
    } else {
        answers.push(Number(answer));
        vxNum++;
    }
}

// 여기 아랫 부분을 함수로 만들 수 있을까..?

var massege = '';


for (var i=0; i < answers.length; i++) {
    if (answers[i] === searchNum) {
        idx = i;
        massege += `vx[${i}]: ${searchNum}\n`;
    }
}


alert(`${searchNum}은(는) ${count(answers, searchNum)}개 있습니다.\n${massege}`);