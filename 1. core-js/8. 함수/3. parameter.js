
// 매개변수(parameter)
// - 함수를 정의할 때 함수 호출부에서 전달한 값을
//   받아서 저장하는 변수

function add (n1, n2) {
    console.log('함수 실행!!');
    return n1 + n2;
}

// 함수 호출
console.log(add(10, 20)); // console.log(30);

var number = add(20, 50); // var number = 70; 
console.log(number);

// x ~ y까지의 총합을 구해야함.
// ex) 1 ~ 10까지의 총합 : 55, 3 ~ 5까지 : 12

function calcRangeTotal(x, y) { // x,y는 여기서 매개변수! // 매개변수 선언 위치 ( var은 넣지 않음. )
    var total = 0; 
    for (var n = x; n <= y; n++) { // 여기서 보면 변수는 4개임. (n, total, x, y) 선언이 안된 x, y는 매개변수임.
        total += n; 
    }
    return total; // 총합인 변수 total을 구하고자 이걸 돌렸기 때문에 return으로 갖다줘라.
} // return 값을 가지고 아래에 코드가 얼마나 있든지 호출 위치로 다시 돌아가서 return 값을 반환함.

// 인수(argument) : 함수를 호출할 때 함수에게 전달하는 값.


// 1 ~ 10까지의 총합
var r1 = calcRangeTotal(1, 10); // 1, 10이 여기서는 인수
console.log(r1);

console.log(`result2: ${calcRangeTotal(3, 7)}`);

var r2 = calcRangeTotal(); // 인수를 안줘보면?? 함수 매개변수 부분에서 undefined가 됨.
console.log(`r2 : ${r2}`); // 인수를 매개변수가 요구하는 수보다 많이 주면?! js는 친절해서 요구하는 수까지 반영해주고 초과된 부분은 값은 저장하되 출력에 영향을 미치진 않음.


// 매개변수가 없는 함수
function rdd() {
    console.log('링딩동 링딩동 링디기링디기링딩딩!!!');
}

rdd();
rdd();
rdd();
rdd();
rdd();

console.log('===================================================');

for (var i = 0; i < 5; i++) {
    rdd();
}

// 매개변수의 기본값
// ES6
function sayHello(language='한국어') { // ='한국어' 부분이 아래의 ES5 버전과 같음.

    // ES5
    // language = language || '한국어'; // 단축 평가
               // 좌항이 false일 경우에만 우항에 걸림.

    if (language === '한국어') {
        console.log('안녕하세요~');
    } else if (language === '영어') {
        console.log(('hello'));
    } else if (language === '중국어') {
        console.log('따자하오~');
    } else {
        console.log('뭔지 몰라~~');
    }
}

console.log('==============================================');
sayHello();


// 매개변수가 없는 함수
// 아래 selectRandomPet은 인풋이 없어도 리턴값이 매번 달라질 수 있음.
function selectRandomPet() {
    var pets = ['멍멍이', '야옹이', '짹짹이', '어흥이', '두껍이'];
    // 0 부터 4 까지의 랜덤정수 (why? pets의 length만큼!!)
    var rn = Math.floor(Math.random() * pets.length);
    return pets[rn];
}

console.log(`선택된 동물: ${selectRandomPet()}`);