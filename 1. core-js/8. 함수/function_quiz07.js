/*
    Q7)
    1. n개의 정수를 전달받아 해당 정수들의
     총합과 평균 2개(의 객체)를 반환하는 함수 
     calcTotalAndAvg를 작성하고 결과를 출력하세요.

    - 호출 예시 : calcTotalAndAvg(10, 20, 30);

    - 출력 예시 : 전달된 숫자 총합: 60, 평균: 20
      
*/

function calcTotalAnaAvg(numbers) { // [10, 20, 30]
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    var avg = total / numbers.length;
    alert(`전달된 숫자 총합: ${total}, 평균: ${avg}`);
    return {
        total: total,
        avg: avg,
    };
    // 객체로 가져오는게 더 나은가? 활용을 생각하면 그럴지도??
    // 리턴값은 언제나 하나라서 객체로 가져와야 한다.
}

// 호출부
var answers = [];

while (true) {
    var answer = prompt('정수를 입력하세요.\n그만 입력하시려면 \'그만\'을 입력하세요.');
    if (answer === '그만') {
        break;
    } else {
        answers.push(Number(answer));
    }
}

calcTotalAnaAvg(answers);