var user = {};

if (!('name' in user)) { // 좀 더 안전하게! 원래 name이란 key가 있었다면 수정 코드가 되기 때문!
    user.name = 'John';
}

if (!('surname' in user)) {
    user.surname = 'Smith';
}

if ('name' in user) { // user라는 변수 속에 name이라는 key가 있다면 수정해라.
    user.name = 'Pete';
}

delete user.name;


var salaries = {
    kim: 1000000,
    park: 1600000,
    lee: 1300000
};

var total = 0; // 팀원의 월급을 저장해줄 변수. (팀원들 월급의 총합)
for(var n in salaries) { // n에 salaries 값들이 대입될 때 'kim', 'park', 'lee' 이런 식의 string 타입으로 대입됨.
    total += salaries[n]; 
}

console.log(`급여 총합: ${total}`);