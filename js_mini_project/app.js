/* !!!!!!!!!!!!! 테이블 태그 배열 만들기(tbody에 대한 내용을 유의!) !!!!!!!!!!!!!!!!
const arr = [];

const $map = document.getElementById('map');

// 첫번째 줄 배열에 넣기
for (let $td of [...$map.firstElementChild.firstElementChild.children]) {
    arr.push($td);
}

// 두번째 줄은 자식 3개 중 가운데가 colspan, rowspan으로 늘어난 main 부분이라 
// 스킵하기 위해 따로따로 배열에 넣기.
arr.push($map.firstElementChild.firstElementChild.nextElementSibling.firstElementChild);

arr.push($map.firstElementChild.firstElementChild.nextElementSibling.lastElementChild);

// 세번째 줄 배열에 넣기
for (let $td of [...$map.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.children]) {
    arr.push($td);
}

// 네번째 줄 배열에 넣기
for (let $td of [...$map.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.children]) {
    arr.push($td);
}

// 다섯번째 줄 배열에 넣기
for (let $td of [...$map.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children]) {
    arr.push($td);
}

// 여섯번째 줄 배열에 넣기
for (let $td of [...$map.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children]) {
    arr.push($td);
}

// 일곱번째 줄 배열에 넣기
for (let $td of [...$map.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children]) {
    arr.push($td);
}

// 여덟번째 줄 배열에 넣기
for (let $td of [...$map.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.children]) {
    arr.push($td);
}

// 아홉번째 줄 배열에 넣기
for (let $td of [...$map.firstElementChild.lastElementChild.previousElementSibling.children]) {
    arr.push($td);
}

// 마지막 10번째 줄 배열에 넣기
for (let $td of [...$map.firstElementChild.lastElementChild.children]) {
    arr.push($td);
}


console.log(arr);

개무식했다... */ 

const arr = [];

const $map = document.getElementById('map');

for (let $td of [...$map.firstElementChild.firstElementChild.children]) {
    arr.push($td);
}

// console.log(arr);
// =====================================================================
const $hang2 = document.querySelector('.hang2');
// console.log($hang2);
const $hang22 = $hang2.lastElementChild;
arr.push($hang22)

// =====================================================================
const $hang3 = document.querySelector('.hang3');

const $hang32 = $hang3.lastElementChild;
arr.push($hang32)

// =====================================================================
const $hang4 = document.querySelector('.hang4');

const $hang42 = $hang4.lastElementChild;
arr.push($hang42)

// =====================================================================
const $hang5 = document.querySelector('.hang5');

const $hang52 = $hang5.lastElementChild;
arr.push($hang52)

// =====================================================================
const $hang6 = document.querySelector('.hang6');

const $hang62 = $hang6.lastElementChild;
arr.push($hang62)

// =====================================================================
const $hang7 = document.querySelector('.hang7');

const $hang72 = $hang7.lastElementChild;
arr.push($hang72)

// =====================================================================
const $hang8 = document.querySelector('.hang8');

const $hang82 = $hang8.lastElementChild;
arr.push($hang82)

// =====================================================================
const $hang9 = document.querySelector('.hang9');

const $hang92 = $hang9.lastElementChild;
arr.push($hang92)

// =====================================================================

const $hang10 = document.querySelector('.hang10');
const $hang10Arr = $hang10.children; // 유사배열
const $hang10ArrCopy = [...$hang10Arr]; // 유사배열을 정배열로 만들고
const $hang10Reverse = $hang10ArrCopy.reverse(); // 정배열을 역배열로 만들고 

for (let $td of $hang10Reverse){
    arr.push($td);

}

// =====================================================================

const $hang91 = $hang9.firstElementChild;
arr.push($hang91);

const $hang81 = $hang8.firstElementChild;
arr.push($hang81);

const $hang71 = $hang7.firstElementChild;
arr.push($hang71);

const $hang61 = $hang6.firstElementChild;
arr.push($hang61);

const $hang51 = $hang5.firstElementChild;
arr.push($hang51);

const $hang41 = $hang4.firstElementChild;
arr.push($hang41);

const $hang31 = $hang3.firstElementChild;
arr.push($hang31);

const $hang21 = $hang2.firstElementChild;
arr.push($hang21);

// console.log(arr);

// ======================= 변수 선언, 함수 정의부 =================== //

function movingCom(){

    console.log($comCount);
    if ($comCount > arr.length){
        // console.log('컴퓨터가 이겼습니다.!! YOU LOOSE');
    }
    else if ($comCount < arr.length){
        const $comSpan = document.createElement('span');
        $comSpan.classList.add('lnr','lnr-rocket');
        arr[$comCount].appendChild($comSpan);
    }
    
    // $userSpan.innerHTML =`<span class="lnr lnr-rocket"></span>`
}

function movingUser(){

    if ($userCount > arr.length){
        // console.log('사용자가 이겼습니다.!! YOU WIN!!');
    }
    else if ($userCount <arr.length){
        const $userSpan = document.createElement('span');
        $userSpan.classList.add('lnr','lnr-user');
        arr[$userCount].appendChild($userSpan);
    }

    // $userSpan.innerHTML =`<span class="lnr lnr-rocket"></span>`
}

// 이전에 있던 유저 이모티콘 없애는 함수 

function removeUser(){
    for (let i of arr){
        let $spans = [...i.children];
        // console.log($spans);
        for(let t of $spans){
            if(t.classList.contains('lnr')&& t.classList.contains('lnr-user')){
                t.classList.remove('lnr');
                t.classList.remove('lnr-user');
            }
        }
    }
}


// 이전에 있던 컴퓨터 이모티콘 없애는 함수 

function removeCom(){
    for (let i of arr){
        let $spans = [...i.children];
        // console.log($spans);
        for(let t of $spans){
            if(t.classList.contains('lnr')&& t.classList.contains('lnr-rocket')){
                t.classList.remove('lnr');
                t.classList.remove('lnr-rocket');
            }
        }
    }
}


// 주사위 던지기를 누르면 #dice 박스에 클래스(.throw)를 부여할 함수 정의.
function throwDice() {
    const $dice = document.getElementById('dice');

    if ($dice.classList.contains('throw')) {
        $dice.classList.remove('throw');
    }
    setTimeout(() => {
        $dice.classList.add('throw');
    }, 100);
}

const $h1 = document.querySelector('.main-title');

// 게임 시작 전 컴퓨터의 위치 (전진 때마다 값이 변함.)
let $comCount = 0; 
// 게임 시작 전 사용자의 위치
let $userCount = 0;


let isFinish = false; //게임종료 여부


// 무인도에서 몇번 주사위를 굴렸는지 카운트할 변수.
let $islandUserCount = 0;
let $islandComCount = 0;

// // 사용자가 무인도인지 확인할 함수.
// function isIslandUser() {
//     for(let i=1; i < arr.length; i++) {
//         if ($islandUserCount >=3) {
//             $islandUserCount = 0;
//             break;
//         }
//         else if (arr[i].classList.contains('island') && i === $userCount) {
//             $h1.textContent = `사용자는 현재 무인도에 있습니다. 앞으로 ${3-$islandUserCount}번 동안 주사위를 굴려도 움직일 수 없습니다.`;
//             $islandUserCount++;
//         }
//     }
// }

// // 컴퓨터가 무인도인지 확인할 함수.
// function isIslandCom() {
//     for(let i=1; i < arr.length; i++) {
//         if ($islandComCount >= 3) {
//             $islandComCount = 0;
//             break;
//         } else if (arr[i].classList.contains('island') && i === $comCount) {
//             $h1.textContent = `컴퓨터는 현재 무인도에 있습니다. 앞으로 ${3-$islandComCount}번 동안 주사위를 굴려도 움직일 수 없습니다.`;
//             $islandComCount++;
//             break;
//         }
//     }        
// }


// ========================= 실행부 =====================//



// 클릭이벤트 부여 
const $btn = document.getElementById('dice-button');
$btn.addEventListener('click', e => {
    console.log(`끝?: ${isFinish}`);
    if (isFinish) return;
    

    if (($userCount >= arr.length) || ($comCount >= arr.length) ){
        if($userCount > $comCount) {
            $h1.textContent = '사용자가 이겼습니다 그만 누르세요';
            console.log('사용자가 이겼습니다 그만 누르세요');
            isFinish = true;
            return;
        }
        else if ($userCount < $comCount) {
            $h1.textContent = '컴퓨터가 이겼습니다 그만 누르세요';
            console.log('컴퓨터가 이겼습니다 그만 누르세요');
            isFinish = true;
            return;
        }
    }

    throwDice(); // 주사위 던지는 애니메이션 함수.
  
    // 주사위 값 랜덤 부여
    const $comNum = Math.floor(Math.random() * 5) + 1;
    const $userNum = Math.floor(Math.random() * 5) + 1;
    
    // console.log(typeof $comNum);// 숫자 
    // console.log(typeof $userNum);// 숫자 
    // 숫자 

    // 주사위 값이 누가 큰지를 비교하고 큰 숫자에 해당하는 플레이어에게 동작.
        if ($userNum > $comNum) {
            
            if ($userCount === 18 && $islandUserCount <= 2) {
                $h1.textContent = `사용자는 현재 무인도에 있습니다. 앞으로 ${2-$islandUserCount}번 동안 주사위를 굴려도 움직일 수 없습니다.`;
                $islandUserCount++;
                return;
            }
        
            removeUser(); // 이전 사용자 이모티콘 지우는 함수.
        
            $userCount += $userNum;
                        
            if ($userCount < arr.length){
                $h1.textContent = (`사용자 : ${$userNum} 컴퓨터 : ${$comNum} 로 사용자가 이겼습니다.\n 사용자가 앞으로가겠습니다.` );
            }
            
            movingUser(); // 사용자 아이콘을 이동시킬 함수.
                

        } else if ($userNum < $comNum) {
            
            if ($comCount === 18 && $islandComCount <= 2) {
                $h1.textContent = `컴퓨터는 현재 무인도에 있습니다. 앞으로 ${2-$islandComCount}번 동안 주사위를 굴려도 움직일 수 없습니다.`;
                $islandComCount++;
                return;
            }

            removeCom(); // 이전 컴퓨터 이모티콘 지우는 함수.
    
            $comCount += $comNum;
    
            if ($comCount < arr.length){
                $h1.textContent = (`사용자 : ${$userNum} 컴퓨터 : ${$comNum} 로 컴퓨터가 이겼습니다.\n 컴퓨터가 앞으로가겠습니다.`);
            }
    
            movingCom(); // 컴퓨터 아이콘을 이동시킬 함수.
        }    
        else {
            $h1.textContent = ('같은 숫자가 나왔습니다. 다시눌러주세요.');
            return;
        }


    // console.log($comCount);
    // console.log($userCount);
//    if (($comCount || $userCount) > 36){
//     console.log('게임이 끝났습니다.');
//    }
    
    
    // console.log($comCount);
    // console.log($userCount);
    

});