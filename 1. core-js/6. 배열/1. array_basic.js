// 배열 생성
// 배열 변수 이름 관례: 복수형(-s), -List
var fruitList = ['사과', '포도', '오렌지', '복숭아', '자몽']; // 빈 배열도 자주씀 []

console.log(`배열의 길이: ${fruitList.length}개`);


// 요소(element): 배열에 저장된 하나하나의 데이터들을 요소라고 부른다.
// 배열의 요소를 참조: 배열에서 데이터를 꺼내쓰겠다.

console.log(fruitList[2]); // 0번부터 시작한다는 것을 유의!!!!
console.log(`${fruitList[4]} 맛있어~~`); // 자몽 맛있어~~ 가 등장.

var favorite = fruitList[1]; // 배열에서 원하는 값을 뽑아서 저장.
console.log(`제일 좋아하는 과일: ${favorite}`)


// 배열 요소 수정
fruitList[3] = '파인애플';
console.log(fruitList);


// 배열 내부 데이터 전체 순회 (반복문 처리!)
console.log('===================================');

for (var i = 0; i < fruitList.length; i++) { // 5= 배열의 길이 ==>>> fruitList.length; 활용
    console.log(`${fruitList[i]} 맛있어요~`);
}