/*
    # 시나리오

    - 사용자는 100개의 아이콘 중 한 개를 클릭한다.
    - 시스템은 정답데이터(1~100사이의 랜덤정수)와 
      클릭한 아이콘의 숫자데이터를 비교한다.
    - 시스템은 비교결과를 판단하여 UP인경우 DOWN인 경우 그리고 정답인 경우에 따른 효과를 렌더링한다.
    - 사용자는 지속적으로 정답을 맞출 때 까지 위의 행위를 반복한다.

===============================

# 세부 시나리오

1. 100개의 아이콘에는 클릭 이벤트가 부여되어야 한다
2-1. UP인 경우
=> up아이콘의 애니메이션을 발동시킨다.
=> 해당 범위에 벗어난 아이콘을 제거한다.
=> h2태그의 최소값을 수정한다.

2-2. down인 경우
=> down아이콘의 애니메이션을 발동시킨다.
=> 해당 범위에 벗어난 아이콘을 제거한다.
=> h2태그의 최대값을 수정한다.

2-3. 정답인 경우
=> finish박스의 애니메이션을 발동시킨다.

===============================

# 필요한데이터

 1-100사의 랜덤정수(고정값),
 사용자가 클릭한 아이콘의 숫자,
 최소값을 저장할 변수, 최대값을 저장할 변수

*/



// ================= 전역변수, 함수 정의부 =======================

// 게임 진행에 필요한 데이터
// (실제정답, 선택한 숫자, 최소값, 최대값)
// 나는 하나하나 다 변수 설정을 하려고 했었는데 이렇게 객체에 담는게 더 편하겠다.
const gameData = {
    secret: Math.floor(Math.random() * 100) + 1,
    answer: null,
    min: 1,
    max: 100,
}

const $begin = document.getElementById('begin');
const $end = document.getElementById('end');
const $up = document.getElementById('up');
const $down = document.getElementById('down');
const $finish = document.getElementById('finish');
const $result = document.querySelector('.result');


// 숫자 아이콘 생성 함수
function makeIcons() {
    
    const $numbers = document.getElementById('numbers');

    // 가상의 태그
    // 프로그램이 커지다 보면 이런 최적화를 하고 안하고 차이가 크다.
    const $virtual = document.createDocumentFragment();


    for (let i = 1; i<= 100; i++) {
        const $newDiv = document.createElement('div');
        $newDiv.textContent = i;
        $newDiv.classList.add('icon');
        
        $virtual.appendChild($newDiv);

        // 만약에 $newDiv.textContent가 문자라면??
        // data속성을 활용해서 값을 부여해준다.
    }

    $numbers.appendChild($virtual);
}

// UP, DOWN일 경우 해야할 일 정의
// parameter 1: isup = up인 경우 true, Down인 경우 false
// parameter 2: 클릭된 요소 노드
function processUpDownCase(isUp, target) {
    if (isUp) {
        // 실수하지 않게 selected를 상수처리해서 붙일 수도 있다. const CLASS_NAME = 'selected';
        $up.classList.add('selected');
        gameData.min = gameData.answer + 1;
        $begin.textContent = gameData.min;
    } else {
        $down.classList.add('selected');
        gameData.max = gameData.answer - 1;
        $end.textContent = gameData.max;
    }

    // 아이콘 제거 함수 호출
    clearIcons(isUp); // 업인지 다운인지 알아야 그 기준으로 앞을 지울지, 뒤를 지울지를 선택할 수 있기 때문!
}

// 클릭한 아이콘을 기준으로 범위밖의 아이콘을 제거하는 함수
function clearIcons(isUp, target) {
    const $numbers = getElementById('numbers');

    let $delTarget = target;
    while($delTarget) {
        let $nextTarget = isUp ? 
                $delTarget.previousElementSibling 
                : $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    }
}

// 정답을 맞출 경우 해야할 일
function processCorrectCase() {
    const $finish = document.getElementById('finish');
    
}


// 사용자가 선택한 숫자를 실제 정답과 비교해서 결과를 처리하는 함수
function compareAnswer(target) {
    console.log(`정답: ${gameData.secret}`);
    if (gameData.answer === gameData.secret) {
        // 정답인 경우
        // console.log('정답!');
        processCorrectCase();
    } else if (gameData.answer < gameData.secret) {
        // UP인 경우
        // console.log('업!');
        processUpDownCase(true, target);
    } else {
        // Down인 경우
        // console.log('다운!');
        processUpDownCase(false, target);
    }
}





// ================= 메인 코드 실행 부분 ==========================
// 메인코드 부분에서 전역변수를 사용하지 않기 위해 즉시실행함수처리.
(function () {

    // 100개의 아이콘 생성하여 배치
    makeIcons();

    // 아이콘 클릭 이벤트 부여
    const $numbers = document.getElementById('numbers');

    $numbers.onclick = e => {
        // 만약에 아이콘이 아닌 영역을 클릭했다면 나가!
        // matches (안에는 css 선택자로 입력 ex: '#numbers > .icon')
        if (!e.target.matches('#numbers > .icon')) {
            return;
        }

        // 하단부 반복문이 제대로 돌기 위해 찐배열로 변환.
        const children = [...$numbers.children];

        // 사용자가 선택한 숫자가 무엇인가???
        // console.log(e.target.textContent);
        gameData.answer = +e.target.textContent;
        // console.log(gameData); //이렇게 봤더니 answer 값이 문자열로 들어오네? 비교해야하는데?

        // 정답 검증하는 함수 호출
        compareAnswer(e.target);
    }
});