alert('학생 수를 입력해주세요.');

var min = 1; // 최소 학생 수
var max = 40; // 최대 학생 수

// 범위 밖의 수를 입력하면 다시 입력하라고 하자.

// 학생 수 먼저 입력 받자.
while (true) {
   var studentNum = prompt(`${min}~${max} 사이의 학생 수를 입력해주세요.`);
   if (studentNum > min && studentNum < max) {
       break;
   } else {
       alert(`범위 밖의 학생 수를 입력하셨습니다.\n${min}~${max} 사이의 학생 수를 입력해주세요!`);
   }
}

// 학생 수에 따른 각 학생별 점수를 입력 받자.
alert(`${studentNum}명의 점수를 입력하세요.`);

var num = 1; // (n번 : ) 입력받을 때마다 높여갈 번호 변수.
var scoreList = []; // 입력받은 점수들을 저장할 배열 변수.

while (true) {
    var score = +prompt(`${num}번: `);
    if (score >= 0 && score <= 100) {
        scoreList.push(score);
    } else {
        alert(`범위 밖의 점수를 입력하셨습니다. 1 ~ 100점 사이의 점수를 입력하세요!`);
        continue;
    }
    if (num >= studentNum) {
        break;
    }
    num++;
}

// alert(`scoreList: ${scoreList}`);   학생 수까지 점수 받는게 잘 되는지 확인용.


// scoreList의 변수들을 점수 분포 확인용 변수에 저장하자.

var distributions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 점수 분포 저장용 변수.

// parseint(score);

// 학생 별 점수들을 각 10으로 나눈 몫이 분포도에 반영되어야 함.
for (var i = 0; i < scoreList.length; i++) {
    distributions[parseInt(scoreList[i] / 10)]++; // 이건 진짜 암만 생각해도 생각 안나네..
} // ++ 하기보다 그냥 나온 값을 push 해주면 되는거 아닌가?? 안되네.. 이러면 11개가 최대 인덱스여야 하는데 초과됨. 제대로 카운트 되지 않음.

// 분포도에 따라 별 찍기.
var star = ''; // *(별)을 저장할 변수 선언.
for (var i = 0; i < distributions.length; i++) {
    if (i < distributions.length - 1) {
        star += `${i*10} ~ ${i*10+9} : `; 
    } else { // 100점:  <-- 이게 배열의 마지막 요소니까
        star += `100 : `;
    }
    for (var j=0; j < distributions[i]; j++) {
        star += '*';
    }
    star += '\n';
}

alert(star);