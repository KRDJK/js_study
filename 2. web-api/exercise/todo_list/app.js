/*
    추가할 기능
    - 입력창에 아무 것도 입력하지 않으면 필수값을 입력해야한다고 placeholder값 변경. (경고표시처럼 배경을 빨간색으로 바꿔주기)
        -if 문으로 만약 ''
    - 할 일을 입력해서 버튼(+)을 누르면 하단 할 일 목록에 추가 되어야 함.
        - 할 일 목록에서 버튼(x)를 누르면 할 일 목록이 삭제 되어야 함.
        - 입력한 할 일 목록에서 초록 아이콘을 클릭하면 value값이 수정가능하게 됨.
        - 수정 후 버튼(V)를 누르면 수정한 값으로 고정되어야 함.
    - 할 일 목록 왼쪽 체크 박스를 누르면 글씨가 흐려져야함. + 취소선도!
    - 일정량 이상 할일 목록이 늘어나면 스크롤이 생김.(overflow: auto일듯)
*/ 

// ================================================ 전역변수, 함수 선언부 ==================================================

const $mainInput = document.getElementById('todo-text');
const $addBtn = document.getElementById('add');




// ============================================== 메인 함수 실행부 =========================================================


$addBtn.addEventListener('click', function(e){
    if ($mainInput.value === '') {
        $mainInput.setAttribute('placeholder', '필수 입력값입니다.');
        $mainInput.parentElement.style.backgroundColor = 'red';
    }
    console.log(e);
});