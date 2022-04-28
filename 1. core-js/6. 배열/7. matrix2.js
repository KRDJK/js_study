

// 우리반 학생 3명의 4과목 시험 점수 (국영수탐)
var scoreList = [
    [88, 76, 92, 98],
    [65, 70, 58, 99],
    [100, 92, 100, 100]
];

// 각 개인의 평균점수와 학급평균을 구하고 싶다.

// 개인들의 평균점수부터 구하자.
var averageList = []; // 각 학생의 평균들을 저장할 배열.

for (var stuScores of scoreList) {
    // 개인의 총점을 저장할 변수.
    var eachTotal = 0;
    for (var score of stuScores) { // 개인의 총점을 구하는 반복문.
        eachTotal += score;
    }
    // 개인 평균
    var eachAvg = eachTotal / stuScores.length;
    averageList.push(eachAvg);
}

// 각 개인의 수학 점수 총점.
var eachMathTotal = 0; // 개인의 수학 점수를 저장할 변수.
for (var Score of )

// 각 학생의 평균 출력, 학급 평균 구하기
var stuAvgSum = 0; // 모든 학생의 평균 총합을 저장할 변수.

for (let i = 0; i < averageList.length; i++) {
    stuAvgSum += averageList[i]; // 한 학생의 평균점수를 계속 누적하면 그게 학급 학생의 평균 총합이 됨.
    console.log(`${i+1}번 학생의 평균: ${averageList[i]}점.`);
}

var classAverage = stuAvgSum / scoreList.length;
console.log('==============================================');
console.log(`우리 학급 평균: ${classAverage}점`);
console.log(`우리 학급 수학점수 평균: ${}점`);
