
alert('재미있는 사칙연산 게임~~~');
alert('[즐겁게 문제를 푸시다가 지겨우면 0을 입력하세요~]\n=============================================');

var num = 0; // 문제 번호를 저장할 변수.
var correct = 0; // 정답 횟수를 저장할 변수.
var wrong = 0; // 오답 횟수를 저장할 변수.
var consecutiveWrong = 0; // 연속 오답 횟수를 저장할 변수.
var warning = 3; // n번의 연속 오답시 경고문을 나타낼 변수.

var level = +prompt(`~~~~난이도를 설정합니다.~~~~\n[ 1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) | 4. 종료 (0) ]`);

var max = 0; // 사용자의 선택에 따라 최댓값이 변하는 변수. 밑에 반영은 아직 안했음.

while (true) {
    // 난이도 부여. 최댓값을 변수 부여해주는 방법도 있음.
    // 1, 2, 3, 4 중에서 선택하는게 아니면 계속 다시 선택하게 하려면 또 loop문을 만들 수 있다.
    if (level === 1) {
        var rn1 = Math.floor(Math.random()*100)+1;
        var rn2 = Math.floor(Math.random()*100)+1;
    } else if (level === 2) {
        var rn1 = Math.floor(Math.random()*50)+1;
        var rn2 = Math.floor(Math.random()*50)+1;
    } else if (level === 3) {
        var rn1 = Math.floor(Math.random()*20)+1;
        var rn2 = Math.floor(Math.random()*20)+1;
    } else if (level === 0) {
        alert('게임을 종료합니다!');
        break;
    } else { 
        alert('범위 안의 값을 제대로 입력하지 않아 난이도는 자동 상으로 조정됩니다.');
        var rn1 = Math.floor(Math.random()*100)+1;
        var rn2 = Math.floor(Math.random()*100)+1;
    }
    // 난이도 부여 끝.


    // 기호를 랜덤부여 덧셈,뺄셈,곱셈 최댓값 3, 최솟값 1 ???
    var mark = Math.floor(Math.random()*3)+1;
    
    var clear = 0; // 임시 정답 변수.

        if (mark === 1) {
            mark = '+';
            clear = rn1 + rn2;
        } else if (mark === 2) {
            mark = '-'; 
            // 만약 두 수가 같아서 답이 0 이 나오면 종료값 0에 걸리니까 아예 출제되지 않게 하려면
            // if문을 하나 더 걸로 rn1-rn2가 0일 경우 continue; 해라 라고 할 수 있음.
            clear = rn1 - rn2;
        } else if (mark === 3) {
            mark = 'x';
            clear = rn1 * rn2;
        }
    // 기호 랜덤 부여 끝.


    num++; // 문제 번호 카운트

    var answer = +prompt(`Q${num}. ${rn1} ${mark} ${rn2} = ?? `);

    if (answer === clear) {
        alert('정답입니다!');
        correct++;
        consecutiveWrong = 0;
    } else if (answer === 0 && clear === 0) {
        alert('정답입니다!');
        correct++;
        consecutiveWrong = 0;
    } else if (answer === 0 && clear !== 0) {
        alert(`게임을 종료합니다!\n=============================================\n정답횟수: ${correct}회, 틀린횟수: ${wrong}회`);
        break;
    } else {  //if (answer !== clear && answer !== 0)  // 틀렸을 때 계속 해당 문제를 반복하여 맞추게 하려면 여기에 또 loop를 건다.
        alert('틀렸어요~');
        wrong++;
        consecutiveWrong++;
        // 3번 연속으로 틀리면 답을 신중히 입력해보세요라는 문구를 띄우기.
        if (consecutiveWrong % warning === 0) {
            alert(`${warning}번 연속으로 오답을 입력하셨습니다. 조금 더 신중히 답을 입력해보세요!`);
        }
    }
}