
var foods = ['김말이', '닭꼬치', '어묵', '볶음밥', '짜장면', '짬뽕'];

// indexOf(element = 인덱스를 찾고자 하는 배열 속 요소) : 배열 요소의 인덱스를 알려줌.
var idx = foods.indexOf('닭꼬치'); 
// 배열 안에 찾고자 하는 것이 여러 개 있을 경우, 맨 처음 발견(걸린)한 것을 보여줌.
// foods.lastIndexOf('닭꼬치');  ==>> 얘는 뒤에서 부터!!! 제일 마지막에 걸리는 요소가 몇번 째인지(index)를 보여줌.


var idx = 0;
for (var f of foods) {
    if(f === '볶음밥') {        
        break;
    }
    idx++;
} 

console.log(`찾은 인덱스: ${idx}`);

// slice() : 배열을 부분 추출하여 사본 배열로 변환.
console.log('=================================================');

var copyFoods = foods.slice(2, 5); // 2 이상 5 미만 결국 (2~4) 추출
console.log(foods);
console.log(copyFoods);

// 3번부터 끝까지 추출.
var copyFoods2 = foods.slice(3); // 값을 하나만 주면 start값이 부여가 된거고 end가 생략된거.
console.log(copyFoods2);

//start, end를 둘 다 생략하면 전체 복사가 됨.
var copyFoods3 = foods.slice();
console.log(copyFoods3);

// 복사본은 언제?? 실험적인 것을 해보고 싶을 때!! 원본에 하면 복구하기 힘들 수도 있어서!

console.log('==================================================');

var nums = [10, 20, 30, 40, 50];

// reverse() : 배열을 역순으로 재배치, 원본이 변화함.
var numsCopy = nums.slice();
numsCopy.reverse(); // 변수로 받을 필요가 없음. 바로 거꾸로 변환시켜버림.

console.log(nums);
console.log(numsCopy);

// 사본 생성시 주의사항!!!
var numbers = [10, 20 ,30];
// var numbers2 = numbers; // 이렇게 사본 복사하면 안되냐? 라는 질문에 대해서.
// 이러면 나중에 원본이 바뀌었을 때, 사본도 같이 바뀔 수 있음. 이러면 안돼!! why? 둘 다 독립적이어야 하는거니까!

// 애초에 사본이라고 할 방법도 아님! slice만이 사본! 저건 같은 주소(서울)를 변수 2개가 공유한다고 봐야 함.

var numbers2 = numbers.slice();

numbers2[1] = 999;
numbers[0] = 777;

console.log(`원본: [${numbers}]`);
console.log(`사본: [${numbers2}]`); // 이러면 사본이 잘 떠졌다고 생각할 수도 있으나, 그렇지 않다.

console.log('=========================================');


// concat() : 배열 2개를 결합한 사본을 가져옴. (요소 간의 결합이 아닌 전체 배열을 결합.)
// 원본은 바뀌지 않음. 배열 변수1.concat(배열 변수2. 콤마 찍어가면서 여러 개 연결도 가능) ==>> 배열변수 1번 뒤에 배열변수 2 또는 추가로 연결한 변수들을 뒤에 차례로 결합. 순서를 바꿔주면 바뀜.

var arr1 = [50, 70, 100];
var arr2 = [9, 5, 1, 10, 20];

var concatCopy = arr1.concat(arr2, arr1, arr1);
console.log(concatCopy);
console.log(arr1);
console.log(arr2);

console.log('=========================================');


// includes(element) : 배열에 특정 요소가 있는지 여부 확인.

var result = foods.includes('닭꼬치'); // 확인하고자 하는 요소를 string 형태로 입력해서 확인해라.
console.log(`요소 탐색 여부: ${result}`);

var result2 = foods.includes('족발') ? '^^' : 'ㅜㅜ';
console.log(result2);

if (foods.includes('깐풍기')) {
    console.log('잘 먹겠습니다.');
} else {
    console.log('ㅠㅜㅠㅜㅠㅜㅜ');
}


console.log('=========================================');
// splice() : 배열의 특정 요소 제거!!, 제거 후 해당 위치에 요소 삽입도 가능

var pets = ['멍멍이', '야옹이', '짹짹이', '고란이'];

console.log(pets);

pets.splice(1, 2); // 어느 위치부터 몇개를 지울거냐?
console.log(pets);

pets.splice(0, 1, '어흥이'); // 0번 인덱스로부터 1개를 삭제하고 그 자리에 어흥이 삽입
console.log(pets);

pets.splice(1, 0, '징징이'); // 1번 인덱스로부터 0개를 지우고 그 자리에 징징이를 삽입.
console.log(pets);

pets.push('꽥꽥이'); // 끝에 넣을 때는 push , .splice(끝,0) 으로도 가능하긴 함.
console.log(pets);

// 2번부터 끝까지 삭제.
pets.splice(2);
console.log(pets);