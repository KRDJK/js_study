
var clear = Math.floor(Math.random()*50)+1;

var count = 0;  // 시도 횟수를 저장할 변수. 이딴 실수를..? 그냥 var count라고만 하면 undefined라서 연산이 안됨. nan이라고 나옴.

var chance = 5; // 기회를 몇 번 줄 것인지 저장하는 변수.

var start = 1; // 정수 찾기 시작점. min이라고 하는게 더 좋았을 듯.

var end = 50; //  정수 찾기 끝점. max라고 하는게 더 좋았을 듯.

// var answer = 0; // 임시 부여 >> 굳이 임시 부여를 할 필요가 없었네?



alert('재미있는 [UP & DOWN] 게임!!!');

alert('난이도를 설정하세요~~~!!')

var level = +prompt('1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)')

if (level === 2) {
    chance = 6;
    alert(`중 난이도입니다. ${chance}번 안에 맞춰주세요!!`);
} else if (level === 3) {
    chance = 10;
    alert(`하 난이도입니다. ${chance}번 안에 맞춰주세요!!`);
} else if (level === 1) {
    chance = 3;
    alert(`상 난이도입니다. ${chance}번 안에 맞춰주세요!!`);
} else {
    chance = 3;
    alert(`범위 밖의 난이도를 선택하셨습니다. 난이도는 자동으로 상 난이도로 조정됩니다.`);
}

alert(`[${start} ~ ${end} 사이의 무작위 숫자를 ${chance}번 안에 맞춰보세요!!!] ${clear}`);


while (true) {
    var answer = +prompt(`${start}~${end}`);
    ++count;
    if (answer > end || answer < start) {
        alert('범위 안의 값을 입력하세요.');
        --count;
        continue;
    } else if (answer < end && answer > start) {
        if ((chance-count) > 0) {
        } else if ((chance-count) <= 0) {  // === 0 이라고 하는거보다 0이하라고 하는게 낫다. 보안상 이유. 근데 이러면 그냥 else라고 해도 되겠구나.
            alert(`기회가 ${chance-count}번 남았습니다.`);
            alert('기회를 모두 소진했습니다. GAME OVER!!');
            break;
        }

        if (answer === clear) {
            alert(`딩동댕~~~!! ${count}번만에 맞추셨습니다.`);
            break;
        } else if (answer > clear) {
            alert('DOWN!!!');
            end = answer;
        } else {
            alert('UP!!!');
            start = answer;
        }
        alert(`기회가 ${chance-count}번 남았습니다.`);
    }  
}

