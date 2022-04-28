
// 객체 생성 : 객체 리터럴
var dog = { // 중괄호를 대입!
    name : '뽀삐',
    kind : '진돗개',
    age : 3,
    injection: true,
    favorite: ['산책', '개껌']
};

var cat = {
    name : '콩순이',
    kind : '블랙러시안',
    age : 2,
    injection : false,
    favorite: ['낮잠', '츄르', '캣타워']
};

console.log(typeof dog);

// 객체에 저장된 값 참조할 때는??
console.log(dog.name);
console.log(cat.name);
console.log(cat.age);

console.log(dog.favorite);
console.log(cat.favorite[0]);

dog.favorite.push('꼬리흔들기');
console.log(dog);

// cat.splice(1,1); 배열이 아니기에 불가능함.
cat.favorite.splice(0, 1);

// 프로퍼티 참조 2
console.log('==================================');

console.log(dog.injection);
console.log(dog['injection']); // 위와 결과적으로 똑같은 코드이나, 대괄호를 참조할 때는 대괄호 속을 string으로 만들어 줘야함.

console.log('==================================');

// 많이 헷갈리는 부분이라고 함!!!!
var x = 'age';
console.log(cat[x]); // === console.log(cat['age']);
console.log(cat.x); // >> 이건 안됨.


// 프로퍼티 값 수정
console.log('=====================================');

dog.age = 5;
console.log(dog);

dog['age'] = 6;
console.log(dog);

dog.favorite[1] = '아이들';
console.log(dog);

// 새로운 프로퍼티 동적 추가(실행중 추가)
console.log('===================================');
cat.master = '김철수'; // 편리한데??
console.log(cat);


// 프로퍼티 동적 제거
delete cat.master;
console.log(cat);


// 빈 객체 만들기
var obj = {};
