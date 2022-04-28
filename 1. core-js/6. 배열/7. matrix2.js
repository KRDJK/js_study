// 한 반의 4과목 평균 점수를 알고 싶다.

// 우리반 학생 3명의 4과목 시험 점수 (국영수탐)
var scoreList = [
    [88, 76, 92, 98],
    [65, 70, 58, 99],
    [100, 92, 100, 100]
];

// 개인별 평균점수를 구하여 한 배열에 저장한 후, 그 배열 요소들로 학급 평균을 구하자.
// 먼저 개인별 평균 점수를 구하자.

var persenalAvg = []; // 개인별 평균 점수를 저장할 변수.

for (score of scoreList) { // 1회차 [88, 76, 92, 98]
    var subjectSum = 0;
    for (var i = 0; i < score.length; i++) {
        subjectSum += score[i];
    }
    persenalAvg.push(subjectSum / score.length);
}

console.log(`학생별 평균 점수: ${persenalAvg}`);

// 개인별 평균을 구했으니 학급 평균을 구하자.
// 먼저 학급 학생들 평균 점수의 총합부터 구하고, 그 총합을 학급 학생들 수로 나누자.

var classSum = 0; // 학급 학생들의 평균들의 총합.

for (score of persenalAvg) {
    classSum += score;
}

var classAvg = classSum / persenalAvg.length;

console.log(`학급 평균 점수: ${classAvg}점.`);