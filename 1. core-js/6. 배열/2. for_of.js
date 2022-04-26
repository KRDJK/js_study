

var scoreList = [97, 88, 100, 92, 55, 23];
var total = 0;

// 배열 인덱스의 범위 (0) ~ (n-1)

// 총점 구하기

// of 문에서는 if문을 활용해보기 힘듦. 인덱스(var i=0; i>scoreList.length;) 가 따로 없기 때문에!
for (var n of scoreList) {   // of 오른쪽에 배열을 배치한다. 그 배열에서 하나를 꺼내서 담아낼 변수를 왼쪽에 배치한다.
    total += n; // 배열의 순서대로 loop가 됨.
}

// 이전에 배워왔던 버전.
for (var i = 0; i < scoreList.length; i++) {
    total += scoreList[i];
}


// 평균 구하기
var average = total / scoreList.length;

// 평균 반올림하기
var digit = 2; // 반올림하고 보여주고 싶은 자릿수를 반영한 변수.
var prettierAvg = Math.round(average * 10**digit) / 10**digit; // 소수점 2번째 자리까지 반올림 하고 싶을 때

console.log(`총점: ${total}점, 평균: ${prettierAvgaverage}점`);
