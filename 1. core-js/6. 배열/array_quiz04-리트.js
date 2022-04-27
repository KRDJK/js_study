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

alert(``);