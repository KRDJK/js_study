var correct = Math.floor(Math.random() * 50) + 1;

count = 0; // 시도 횟수를 저장할 변수

chance = 5; // 최대 시도 가능한 횟수를 지정해줄 변수

min = 1; // 게임 정수 범위 최솟값

max = 50; // 게임 정수 범위 최댓값

alert('재미있는 UP & DOWN 게임~~~');
alert('난이도를 설정하세요~~~');
var level = +prompt('[ 1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번) ]');

if (level === 1) {
    chance = 3;
    alert(`상 난이도입니다. ${chance}번 안에 맞춰주세요!!`)
} else if (level === 2) {
    chance = 6;
    alert(`중 난이도입니다. ${chance}번 안에 맞춰주세요!!`)
} else if (level === 3) {
    chance = 10;
    alert(`하 난이도입니다. ${chance}번 안에 맞춰주세요!!`)
} else {
    chance = 3;
    alert(`범위 밖의 값을 입력하였습니다. 난이도는 상으로 자동 조정됩니다. 기회는 ${chance}번입니다.`)
}

alert(`${min} ~ ${max} 사이의 무작위 숫자를 ${chance}번 안에 맞춰보세요!!! ${correct}`);


while (true) {
    var answer = +prompt(`${min} ~ ${max}`);
    if (answer < min || answer > max) {
        alert('범위 안의 값을 입력하세요!!');
        continue;
    }
    count++;
    if (answer < correct) {
        alert('UP!!!');
        min = answer;
    } else if (answer > correct) {
        alert('DOWN!!!');
        max = answer;
    } else if (answer === correct) {
        alert('딩동댕~~~!!!');
        alert(`${count}번만에 정답을 맞추셨습니다.`);
        break;
    }
    alert(`기회가 ${chance-count}번 남았습니다.`);
    if ((chance-count) <= 0) {
        alert('기회를 모두 소진했습니다. GAME OVER!!!');
        break;
    }
}