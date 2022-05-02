
// const (constant: 상수 - 유일성과 불변성)
// 변하면 변수, 안변하면 상수

// 원주율
const pi = 3.14159265; // 변하지 않는 수를 온전히 보존하고 싶을 때
// pi = '메롱'; const로 하면 변경하려는 시도 자체를 막아준다.

console.log(5* 5* pi);

for (let i = 0; i < 3; i++) {} // i를 const로 하면 0에서 올라갈 수 없기 때문에 let으로 쓴다.

// const 와 객체 (객체, 배열, 함수)
const person = {
    name: '김철수',
    age: 35,
};

person.age = 36;
console.log(person.name);

const dog = {
    name: '초코',
    age: 4,
};

// person = dog; const가 아닌 let으로 설정해놓고 person=dog라고 했으면 person 전체가 dog로 변경됨.

// 객체는 무조건 const!!!

const numbers = [10, 20, 30];
numbers[1] = 999;

//numbers = [000, 999, 33, 44]; // 이러면 안된다.

console.log(numbers);