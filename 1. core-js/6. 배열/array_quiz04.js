var min = 1; // 최소 학생 수
var max = 40; // 최대 학생 수

var student = +prompt(`학생 수를 입력해주세요.\n♬${min}~${max} 사이로 입력해주세요.`);
alert(`${student}명의 점수를 입력해주세요.`);

var scoreList = []; // 점수들을 입력 받을 배열 변수.
var stars = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


for (var i = 1; i <= student; i++) {
    var score = +prompt(`${i}번: `);
    if (score < 0 || score > 100) {
        alert(`비정상적인 점수입니다.\n입력하신 점수: ${score}\n0 ~ 100점 사이로 입력하세요.`)
    } else {
        scoreList += score;
        for (var k = 0; k <= 10; k++) {
            if (parseInt(score / 10) === k) { // 몫 구하기 parseInt();
                stars[k]++;
            }
        // if (parseInt(score / 10) === 0) {
        //    scoreEa[0]++;
        // }
    }
}

var a = stars[0];
var b = stars[1];
var result = '';

for (var i = 0; i < stars.length; i++) {

}







/*
var result = []; // 분포도를 파악할 배열 변수.

var start = 0; // 점수 분포도의 시작 최솟값(향후 +10씩 계속) 
var end = 10; // 점수 분포도의 최댓값(향후 +10씩 계속)

for (i = 0; i < idxScore.length; i++) {
    if (idxScore[i] >= start && idxScore[i] < end) {
        result 
    } 
    start += 10;
    end += 10;
}
*/
