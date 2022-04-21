
var score = 80; // 시험 점수

// else 없이 if 단독으로 쓸 수 있으나, else는 단독으로 쓸 수 없음.
if (score >= 60) {
    // if에 하단 2개의 코드를 종속시켰으므로 true라면 둘 다 나오고, false면 둘 다 나오지 않는다.
    console.log('시험에 합격했어요! 축하드립니다.');
    console.log('오늘도 행복하세요~~');
}
// 상위 if가 false일 때는 실행해라. if를 2번 쓰면 cpu가 연산을 2번 하는데, else면 한번만 한다.
// else 일때는 괄호를 넣을 필요가 없지! 이거때문에 오류났었음.
else {
    console.log('시험에 불합격했습니다.');
    console.log('다음엔 잘할거에요 화이팅!');
}


// 위 if 코드와 상관 없기 때문에 100% 출력되는 값.
console.log('수고 많으셨습니다.');