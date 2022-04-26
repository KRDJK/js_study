alert('~~~~~~~~~  재미있는 사칙연산 게임 ~~~~~~~~~~\n[즐겁게 문제를 풀다가 지겨우면 0을 누르세요~]');

// 난이도 설정
var message = `~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
[1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`;
var level = +prompt(message);

var max; // 문제난이도별 최대값
if (level === 1) {
    max = 100;
} else if (level === 2) {
    max = 50;
} else if (level === 3) {
    max = 20;
} else {
    max = 999;
}

// 문제 번호
var qNum = 1;
// 정오답횟수
var correct = 0, wrong = 0;

while (true) {
    
    // 2개의 랜덤 정수
    var first = Math.floor(Math.random() * max) + 1;
    var second = Math.floor(Math.random() * max) + 1;
    
    // 실제 정답
    var realAnswer;
    // 랜덤 부호 저장
    var mark;
    // 랜덤 부호 결정 (3개 중에 하나 - 정수 3개가 랜덤)
    var markNum = Math.floor(Math.random() * 3);
    if (markNum === 0) {
        mark = '+';
        realAnswer = first + second;
    } else if (markNum === 1) {
        mark = '-';
        if (first === second) {
            continue;
        } else if (first < second) {
            var t = first;
            first = second;
            second = t;
        }
        realAnswer = first - second;
    } else {
        mark = 'x';
        realAnswer = first * second;
    }


    
    // 사용자가 입력한 답
    var userAnswer = +prompt(`Q${qNum++}. ${first} ${mark} ${second} = ??`);
  
    // 종료 조건
    if (userAnswer === 0) {
        alert(`게임을 종료합니다.\n# 정답횟수: ${correct}회, 틀린횟수: ${wrong}회`);
        break;
    }
    
    //정오답 판단
    if (realAnswer === userAnswer) {
        alert('정답입니다!');
        correct++;
    } else {
        alert('오답입니다!');
        wrong++;
    }
    
}