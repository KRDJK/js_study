/*
    Q4)
    n개의 정수와 탐색할 정수를 전달받아 
    탐색할 정수가 n개 중에 있다면 
    몇번째에 있는지 반환하고
    없다면 -1을 반환하는 함수 search()를
    작성하고 아래 그림과 같이 출력하세요.
*/

// n개의 정수를 입력받아 정수 그룹을 만들자.
// 탐색할 정수를 입력받고 정수 그룹 속에 탐색할 정수가 있는지 찾자.
// 정수 그룹에 탐색 정수가 있다면 몇번 째에 있는지 반환하고 없으면 -1을 반환하자.

function search(numbers, searchNum) { // 정수그룹 ex : [0, 1, 2, 3] | 찾을 값 : 2
    if(numbers.includes(searchNum)) {
        var idx = numbers.indexOf(searchNum);
        return idx;
    } else {
        return -1;
    }
}


// 호출부
alert('정수를 입력하여 정수 그룹을 생성해주세요.\n정수를 그만 추가하고 싶으면 \'그만\'이라고 입력해주세요.');

var answers = []; // ex : [0, 1, 2, 3]

var vxNum = 0;

while (true) {
    var answer = prompt(`vx[${vxNum}]: `);
    if (answer === '그만') {
        var searchNum = +prompt('찾을 값: '); // ex : 2
        break;
    } else {
        answers.push(Number(answer));
        vxNum++;
    }
}

if (search(answers, searchNum) === -1) {
    alert('탐색에 실패했습니다.');
} else {
    alert(`${searchNum}은(는) ${search(answers, searchNum)+1}번째에 있습니다.`)
}