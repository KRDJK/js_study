
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

// =====================전역 변수, 함수 정의부================== //

const gameData = {
    correct: Math.floor(Math.random()*100)+1,
    answer: null,
    min: 1,
    max: 100,
};

// 숫자 아이콘 생성 함수
function makeIcons() {
    // div.icon 태그를 만들어서 div#numbers에 넣을거임.
    // 그러면 사전에 $numbers를 잡아오자.
    const $numbers = document.getElementById('numbers');

    // 가상의 태그를 만들어서 넣자. why? 만들어질 때마다 $numbers에 실물로서 담으면 최적화적 관점에서 좋지 않다.
    // 그냥 createElement를 쓰면 그걸로 만든 태그가 뭐든 간에 하위 태그가 하나 더 생기게 됨.
    // 내가 지금 만든 것들을 직속자식으로 넣고 싶은데 손자가 된다는 뜻.
    // 그럴 땐! createDocumentFragment를 쓰면 된다.

    const $virtual = document.createDocumentFragment(); // 공란

    for (let i = 1; i <= 100; i++) {
        const $newDiv = document.createElement('div');
        $newDiv.textContent = i;
        $newDiv.classList.add('icon');

        $virtual.appendChild($newDiv);
    }
    $numbers.appendChild($virtual);
}






// ===================== 메인 코드 실행부 ================== //
(function() {
    makeIcons(); // 100개를 만들어서 집어넣었음.

    // 아이콘마다 클릭 이벤트 부여
    const $numbers = document.getElementById('numbers');
    // 이벤트 위임방식으로 상위 태그인 #numbers에 이벤트를 넣자. 자식에게 이벤트가 위임됨.
    $numbers.addEventListener('click', e => {

        // 자식만 눌러야 하는데 아이콘 태그들이 아니면서 #numbers에 빈공간을 눌러도 타게팅이 된다.
        if (!e.target.matches('#numbers > .icon')) {
            return;
        }

        // 사용자가 선택한 숫자가 무엇인가??
        // console.log(e.target.textContent);
        gameData.answer = +e.target.textContent;

        /*
            클릭시 정답과 비교 검증하고, 그에 따른 애니메이션들이 실행되면서,
            
        */



    });

}) ();