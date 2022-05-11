
// ================= 전역 변수, 함수 정의부 ====================== //

// 할 일 데이터
const todos = [
    {
        id: 1,
        text: '할 일 1',
        done: false,
    },
    {
        id: 2,
        text: '할 일 2',
        done: false,
    },
    {
        id: 3,
        text: '할 일 3',
        done: false,
    },
];


// 새로운 할 일의 아이디를 생성하는 함수
function makeNewId() {
    if (todos.length <= 0) {
        return 1;
    } else {
        // 기존의 맨 마지막 데이터의 아이디 + 1
        return todos[todos.length - 1].id + 1; 
    }
    // return todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    // 이렇게 한 줄로 리팩토링 가능.
}


// 새로운 할 일을 화면에 렌더링하는 함수(html태그를 만들어 넣어주는 함수)
function renderNewtodo(newTodo) {
    
    // li 태그 생성
    const $newLi = document.createElement('li');
    $newLi.classList.add('todo-list-item');
    $newLi.dataset.id = newTodo.id; // 여긴 진행되는 과정을 다시 한번 천천히 생각하면서 보자. (선언부 매개변수 관련)

    $newLi.innerHTML = `
        <label class="checkbox">
            <input type="checkbox">
            <span class="text">${newTodo.text}</span>
        </label>
        <div class="modify"><span class="lnr lnr-undo"></span></div>
        <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
    `;

    const $todoList = document.querySelector('.todo-list');
    $todoList.appendChild($newLi);
}


// 할 일 추가 기능 정의
function insertTodo() {
    // 1. 할 일 데이터 객체 생성
    const $todoText = document.getElementById('todo-text');
    const newTodo = {
        id: makeNewId(), // 위에 todos 배열에서 반복문을 돌려서 추출할것. 그럼 길이가 늘어날거 같아서 또 함수 처리.
        text: $todoText.value,
        done: false,
    };
    // console.log(newTodo); // 원하는대로 객체가 생성되는지 확인용.

    // 2. 생성한 객체를 배열에 추가.
    todos.push(newTodo);
    // console.log(todos); // 배열에 잘 추가됐는지 확인용.

    // 3. 화면에 렌더링 (html 태그도 추가되어야 함.)
    renderNewtodo(newTodo);
    

    // 4. input 창 비우기
    $todoText.value = '';
}


// 할 일 체크시 변화 처리
function changeCheckState(e) {
    /*
        #  렌더링 css 처리
        1. 지금 내가 체크한 체크박스를 포함하고 있는 label태그를 찾아서
          클래스 checked를 부여해야합니다.
        2. 그러면 이 함수는 지금 클릭한 체크박스가 누구인지 알아야 합니다.
          그러면 label을 찾아낼 수 있습니다.
        3. 그런데 이 함수는 어디가 클릭되었는지 모릅니다. ?? 그럼 누가 알까요?
    */
    // console.log(e.target); // 되네
    e.target.parentElement.classList.toggle('checked');


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
    // console.log(e.target.parentElement.parentElement.dataset.id);
    if (e.target.parentElement.classList.contains('checked')) {
        for(let $todo of todos) {
            if (+e.target.parentElement.parentElement.dataset.id === $todo.id) {
                $todo.done = true;
            }
        }
    } else {
        for(let $todo of todos) {
            if (+e.target.parentElement.parentElement.dataset.id === $todo.id) {
                $todo.done = false;
            }
        }
    }
    // console.log(todos); // 확인용

}

// 할 일 삭제 처리 함수
function removeTodo($removeTargetLi) {
    // 1. 화면 처리 : 삭제버튼이 선택된 li태그를 ul에서 제거.
    const $todoList = document.querySelector('.todo-list');
    $todoList.removeChild($removeTargetLi);

    // 2. 데이터 처리 : 배열에서 제거된 li에 매칭하는 객체를 삭제.
    // console.log(todos);

    /*
    쌤버전에서 인덱스찾는 함수를 만들었다는 전제 하에!!!
    나는 안만들었었으니 반복문으로 또 찾아야 함..
    // 배열.splice(삭제할 인덱스, i);
    const delIndex = findIndexById($removeTargetLi.dataset.id);
    todos.splice(delIndex, 1);
    */

    // for (let $todo of todos) {
    //     e.
    // }

    // 배열에서 삭제니까!! splice
    for (let i=0; i < todos.length; i++) {
        
    }
}


// 수정이 끝나고 span 아이콘을 한번 더 누를 때 처리할 함수.
function completeModify(e) {
    // 아이콘 원상 복구
    e.target.classList.replace('lnr-checkmark-circle', 'lnr-undo');

    // 가상의 span 태그를 넣을 부모 위치 잡기. 
    const $insertPosition = document.querySelector('.checkbox');

    // input으로 바꿨던 span 태그도 다시 원상복구.
    const $virtualSpan = document.createElement('span');
    $virtualSpan.classList.add('text');
    $virtualSpan.textContent = $insertPosition.lastElementChild.value;


    $insertPosition.replaceChild($virtualSpan, $insertPosition.lastElementChild);

    // 바뀐 할 일 텍스트를 todos 객체에도 반영.
    for (let $todo of todos) {
        if(+e.target.parentElement.parentElement.dataset.id === $todo.id) {
            $todo.text = $virtualSpan.textContent;
        }
    }
    // console.log(todos);
}


// 수정 모드 진입 처리
function enterModifyMode(e) {

    // 아이콘 변경
    // <span class="lnr lnr-checkmark-circle"></span> 로 바꿔야함.
    e.target.classList.replace('lnr-undo', 'lnr-checkmark-circle');


    // 텍스트부분 span -> input[type="text"]로 변경
    // input의 class="modify-input"
        // 가상의 input 태그를 만들어서 교체??
    const $virtualInputNode = document.createElement('input');
    $virtualInputNode.setAttribute('type', 'text');
    $virtualInputNode.classList.add('modify-input');

    const $changeSpan = e.target.parentElement.previousElementSibling.lastElementChild;
    $virtualInputNode.value = $changeSpan.textContent;
    $changeSpan.parentElement.replaceChild($virtualInputNode, $changeSpan);

}


function isValidate() {

    const $todoText = document.getElementById('todo-text');

    // trim(): 문자열의 앞뒤 공백 제거 ==>> 스페이스바로 공백만 쭉 친 것도 걸리게 하기 위해서!!
    if ($todoText.value.trim() === '') {
        $todoText.style.background = 'orangered';
        $todoText.setAttribute('placeholder', '필수 입력사항입니다.');
        return false;
    } else if ($todoText.value.length > 10) {
        $todoText.style.background = 'orangered';
        $todoText.setAttribute('placeholder', '10글자 이내로 작성하세요!');
        return false;
    } else {
        $todoText.setAttribute('placeholder', '할 일을 입력하세요.');
        $todoText.style.background = '';
        return true;
    }
}


// ================= 메인 실행부 =============================== //
(function(){

    // =========== 이벤트 처리 ===================== //

    // 할 일 추가 클릭 이벤트
    const $addBtn = document.getElementById('add');
    $addBtn.addEventListener('click', e => {
        e.preventDefault(); // form의 기본 기능(서버 전송을 시도하느라 페이지 이동이 발생하는 경우를 말함.) 막기
        // console.log('할 일 추가!'); // 이벤트 잘 걸렸는지 확인용.
        /* 
        form에는 action 속성이 숨겨져있는데 이건 무슨 속성이냐?
        서버에 어디로 데이터들을 넘길거냐?
        action 값은 url 주소를 적는다
        그러다보면 이 상황에서 의도치 않은 페이지 이동이 생긴다.
        갈 곳이 정해져있지 않을 땐 a 태그의 경우와 마찬가지로 action 값으로 #을 입력한다.
        
        다른 방법으로는 form 기능을 이 클릭이벤트 동안 막으면 된다
        어떻게?? e.preventDefault();로!
        */


    //    const $todoInput = document.getElementById('todo-text');
    //     if ($todoInput.value === '') {
    //         $todoInput.style.background = 'red';
    //         $todoInput.setAttribute('placeholder', '필수 입력값입니다.');
    //     } else {
    //         insertTodo(); // 할 일을 추가해주는 함수.
    //     }
        if(isValidate()) {
            insertTodo();
        }


    });

    // 공란으로 해서 빨갛게 됐던, 아니던 input창을 클릭하면 
    // 원 상태인 회색 바탕이 되고, 다시 placeholder 값을 할 일을 입력하세요라고 주고 싶으면???




    // 할 일 완료 체크 이벤트 (change)
        // label에 change를 걸면 될거 같지만 그럼 모든 label에..?
        // 이런 경우에 이벤트 위임을 사용해라. ul에 걸면 타고타고 내려가서 label에도 걸림.
    
    const $todoList = document.querySelector('.todo-list');
    $todoList.addEventListener('change', e => {
        // console.log('할 일 체크!');
        // console.log(e.target);

        if (!e.target.matches('.checkbox input[type=checkbox]')) return;

        changeCheckState(e); // 체크했을 때 취소선, 체크 풀면 원상복구 시켜줄 함수.
    });


    // 할 일 삭제 버튼 클릭 이벤트
    $todoList.addEventListener('click', e => {
        // console.log(e.target); // 삭제 버튼을 눌렀을 때 타겟이 div.remove인지, 그 자식인 span인지를 확인용.
        if (e.target.matches('.remove span')) {
            // console.log('할 일 삭제!!!');
            // $todoList.removeChild(e.target.parentElement.parentElement); 
            // 이러면 객체 데이터는 남아있고, html 태그만 삭제됨.

            // console.log(e.target); 확인용
            if (confirm('정말로 삭제할까요??')) {
                const $removeTargetLi = e.target.parentElement.parentElement;
                removeTodo($removeTargetLi);
            }
            
        } else if (e.target.matches('.modify .lnr-undo')) {
            // 할 일 수정모드 진입 버튼 클릭 이벤트
            // console.log('수정 모드 진입');

            // label에 줘보기
                // e.target.parentElement.previousElementSibling.firstElementChild.setAttribute('type', 'text');
            //  input에 줘보기(수정하는 동안에는 타입을 text라고 바꿔야 하려나?)

                // e.target.parentElement.previousElementSibling.firstElementChild.classList.toggle('modify-input');
            // li인가?
                // e.target.parentElement.parentElement.classList.toggle('modify-input');
        
            // span이 input으로 바뀌네.
            enterModifyMode(e);
        } else if (e.target.matches('.modify .lnr-checkmark-circle')) {
            //할 일 수정 완료 클릭 이벤트
            // console.log('수정 완료!');
            completeModify(e);
        }
    });

})();