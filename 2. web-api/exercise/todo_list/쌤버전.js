
//=========== 전역변수, 함수 정의부 =============//

// 할 일 데이터
const todos = [
    {
        id: 1,
        text: '할 일 1',
        done: false
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];

// 새로운 할 일의 아이디를 생성하는 함수
function makeNewId() {
    // if (todos.length <= 0) {
    //     return 1;
    // } else {
    //     //기존의 맨 마지막 데이터의 아이디  + 1
    //     return todos[todos.length - 1].id + 1;
    // }
    return todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
}

// 새로운 할 일을 화면에 렌더링하는 함수
function renderNewToDo(newToDo) {

    // li태그 생성
    const $newLi = document.createElement('li');
    $newLi.dataset.id = newToDo.id;
    $newLi.classList.add('todo-list-item');

    $newLi.innerHTML = `
        <label class="checkbox">
            <input type="checkbox">
            <span class="text">${newToDo.text}</span>
        </label>
        <div class="modify">
            <span class="lnr lnr-undo"></span>
        </div>
        <div class="remove">
            <span class="lnr lnr-cross-circle"></span>
        </div>
    `;

    const $todoList = document.querySelector('.todo-list');
    $todoList.appendChild($newLi);
}

// 할 일 추가 기능 정의
function insertToDo() {
    //1. 할 일 데이터 객체 생성
    const $todoText = document.getElementById('todo-text');
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false,
    };
    // console.log(newToDo);

    //2. 생성한 객체를 배열에 추가
    todos.push(newToDo);
    // console.log(todos);

    //3. 화면에 렌더링
    renderNewToDo(newToDo);

    //4. 인풋창 비우기
    $todoText.value = '';
}


// data-id가 주어지면 해당 id와 일치하는 객체의 인덱스를 리턴
function findIndexById(dataId) {
    
    for (let i = 0; i < todos.length; i++) {
        // console.log(`todos[i].id: ${typeof todos[i].id}`);
        // console.log(`dataId: ${typeof dataId}`);
        // console.log('=======================');
        if (+dataId === todos[i].id) {
            return i;
        }
    }
    return null; // 못찾았다
}

// 할 일 체크시 변화 처리
function changeCheckState($checkbox) {
    /*
        #  렌더링 css 처리
        1. 지금 내가 체크한 체크박스를 포함하고 있는 label태그를 찾아서
          클래스 checked를 부여해야합니다.
        2. 그러면 이 함수는 지금 클릭한 체크박스가 누구인지 알아야 합니다.
          그러면 label을 찾아낼 수 있습니다.
        3. 그런데 이 함수는 어디가 클릭되었는지 모릅니다. ?? 그럼 누가 알까요?
    */
    const $label = $checkbox.parentElement;
    $label.classList.toggle('checked');

    /*
        # 데이터 변동 처리
        1. 지금 css만 변했지 실제 데이터는 변하지 않았음.
        2. todos배열에 있는 변동된 객체를 찾아서 done프로퍼티의 값을
           반대로 바꿔주는 처리가 필요함.
        3. 지금 체크한 태그의 정보를 확인해서 실제 배열에서 해당 객체를
          찾아낸 후 done을 수정해야 함.
        4. 그러면 어떻게 지금 클릭한 체크박스정보를 가진 객체를 탐색할 수 있을까?
        5. id정보를 알면 가능하다.
    */

    // 지금 클릭한 대상의 id값이 무엇인가
    const dataId = $label.parentElement.dataset.id;
    // console.log(dataId);

    const idx = findIndexById(dataId);
    // console.log(idx);
    // console.log(todos[idx]);

    todos[idx].done = !todos[idx].done;
    console.log(todos);
}

// 할 일 삭제 처리 함수
function removeToDo($targetLi) {

    //1. 화면 처리 : 삭제버튼이 선택된 li태그를 ul에서 제거
    const $toDoList = document.querySelector('.todo-list');
    $toDoList.removeChild($targetLi);

    //2. 데이터 처리: 배열에서 제거된 li에 매칭되는 객체를 삭제
    
    const delIndex = findIndexById($targetLi.dataset.id);
    todos.splice(delIndex, 1);
    // console.log(todos);
}

// 수정 모드 진입처리
function enterModifyMode($modifySpan) {

    // 아이콘 변경
    $modifySpan.classList.replace('lnr-undo', 'lnr-checkmark-circle');

    // 텍스트부분 span -> input[type=text]로 변경
    // input의 class="modify-input"

    // 교체 대상 span.text
    const $textSpan = $modifySpan.parentElement.previousElementSibling.lastElementChild;
    
    // input 만들기
    const $modInput = document.createElement('input');
    $modInput.setAttribute('type', 'text');
    $modInput.setAttribute('value', $textSpan.textContent);
    $modInput.classList.add('modify-input');

    // 노드 교체
    $textSpan.parentElement.replaceChild($modInput, $textSpan);
}

// 수정 완료 처리 함수
function modifyToDo($modifySpan) {
    //아이콘 변경
    $modifySpan.classList.replace('lnr-checkmark-circle', 'lnr-undo');

    //교체대상 input
    const $modInput = $modifySpan.parentElement.previousElementSibling.lastElementChild;

    // span.text 생성
    const $textSpan = document.createElement('span');
    $textSpan.classList.add('text');
    $textSpan.textContent = $modInput.value;

    // 노드 교체
    const $label = $modInput.parentElement;
    $label.replaceChild($textSpan, $modInput);

    // 데이터 변동 처리
    const idx = findIndexById($label.parentElement.dataset.id);
    todos[idx].text = $textSpan.textContent;
    console.log(todos);
}

// 할 일 추가시 input 검증
function isValidate() {

    const $todoText = document.getElementById('todo-text');

    // trim(): 문자열의 앞뒤 공백 제거
    if ($todoText.value.trim() === '') {
        $todoText.style.background = 'orangered';
        $todoText.setAttribute('placeholder', '필수 입력사항입니다!');
        $todoText.value = '';
        return false;
    } else if ($todoText.value.length > 10) {
        $todoText.style.background = 'orangered';
        $todoText.setAttribute('placeholder', '10글자 이내로 작성하세요!');
        $todoText.value = '';
        return false;
    } else {
        $todoText.style.background = '';
        $todoText.setAttribute('placeholder', '할 일을 입력하세요.');
        return true;
    }
}


//=========== 메인 실행부 ===================//
(function() {

    //========= 이벤트 처리 ===========//

    // 할 일 추가 클릭 이벤트
    const $addBtn = document.getElementById('add');
    $addBtn.addEventListener('click', e => {
        e.preventDefault();
        // console.log('할 일 추가!');

        if (isValidate()) {
            insertToDo();
        }
    });

    // 할 일 완료 체크 이벤트 (change)
    const $toDoList = document.querySelector('.todo-list');
    $toDoList.addEventListener('change', e => {

        if (!e.target.matches('.checkbox input[type=checkbox]')) return;

        // console.log('할 일 체크!');
        // console.log(e.target);
        changeCheckState(e.target);
    });

    $toDoList.addEventListener('click', e => {
        if (e.target.matches('.remove span')) {
            // 할 일 삭제 버튼 클릭 이벤트
            // console.log('할 일 삭제!!!');
            
            if (confirm('정말로 삭제할까요??')) {
                removeToDo(e.target.parentElement.parentElement);
            }
        } else if (e.target.matches('.modify .lnr-undo')) {
            // 할 일 수정모드 진입 클릭 이벤트
            // console.log('수정 모드 진입');
            enterModifyMode(e.target);
        } else if (e.target.matches('.modify .lnr-checkmark-circle')) {
            // 할 일 수정 완료 클릭 이벤트
            // console.log('수정 완료!');
            modifyToDo(e.target);
        }
    });    


})();