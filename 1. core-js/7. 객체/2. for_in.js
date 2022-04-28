
var phone = {
    company : '삼성',
    color : '펄 화이트',
    model : '갤럭시 S21',
    price : 1200000
};

// console.log(phone.company);

for (var prop in phone) { // 이러면 phone의 key들이 순차적으로 prop에 담김.
    // console.log(prop); // 이랬더니 key가 나오네?? (그것도 string 타입으로)
    console.log(phone[prop]); // 변수 쓸 때는 []로 참조. && 그 변수가 string타입이어야함.
}


console.log('========================================================');

// 객체 내부의 키의 존재여부 확인
var haskey = 'color' in phone; // color라는 키가 phone이라는 객체 안에 있냐?? 답은 논리형으로 나옴. 있으면 true, 없다면 false.
var color = 'color' in phone;
console.log(color); // 왜 true??
console.log(haskey);

var x = 100 < 105; // 이 경우 x의 타입은 boolean;