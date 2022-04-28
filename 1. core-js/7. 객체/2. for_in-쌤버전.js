var phone = {
    company: '삼성',
    color: '펄 화이트',
    model: '갤럭시 S21',
    price: 1200000
};

for (var prop in phone) {
    console.log(phone[prop]);
}

// 객체 내부의 특정키의 존재여부 확인
console.log('========================');
// var 메롱 = 'color';
// phone.memory = '16GB';

var haskey = 'memory' in phone;
console.log(haskey);