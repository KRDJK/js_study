
// 각 개인의 평균 점수와 학급 평균을 구하고 싶다.

// 반 학생 3명의 4과목 시험 점수 (국영수탐)
var scoreList = [
    [88, 76, 92, 98],
    [65, 70, 58, 99],
    [100, 92, 100, 100]
]

// 개인 평균
var persenalAvg = []; // 개인의 평균들을 저장할 변수.

var persenalMathSum = 0; // 개인의 수학점수 총합을 저장할 변수.

for (score of scoreList) { // score = 1회차에 [88, 76, 92, 98]
    var subjectScoreList = 0; // 과목별 점수들의 총합을 저장할 변수.
    for (var i = 0; i < score.length; i++) {
        subjectScoreList += score[i];
        if (i === 2) { // 수학 점수를 배열 인덱스 2번에 등록하기 때문에!
            persenalMathSum += score[2];
        }
    }
    persenalAvg.push(subjectScoreList/score.length);
}

// console.log(persenalAvg); // 학생 3명의 4과목 평균 점수.
console.log(persenalMathSum);
console.log(`우리 학급 학생 ${scoreList.length}명의 수학 점수 평균: ${persenalMathSum/scoreList.length}점.`);

// 학급 평균

var classSum = 0; // 학급별 학생의 평균 점수를 저장할 변수. (학급별 학생들의 평균을 모두 더한 변수)
for (persenalScore of persenalAvg) { // 1회차에 88.5 | 2회차에 73 | 3회차에 98
    classSum += persenalScore;
}

// console.log(classSum);
console.log(`학급 평균: ${classSum / persenalAvg.length}점.`);