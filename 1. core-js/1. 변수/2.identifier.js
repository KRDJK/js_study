
// identifier: 식별자 (한국인의 id는? 주민등록번호)
// - 데이터를 구분하기 위한 고유한 이름(변수, 함수, ... )


// 1. 식별자 이름은 대소문자를 구분한다.
var apple = '사과';
apple = '맛있는 사과';
var APPLE = '맛 더럽게 없는 사과';
var Apple = '에이뽈';

console.log(apple);


// 2. 숫자로 시작하거나 숫자만으로 구성하면 안됨!!!
// var 999 = '구백구십구'; -->> (x) 이런 식으로 하면 안됨.
// var 7lucky7 = '럭키럭키'; -->> (x)
var lucky7 = 777; // -->> 얘는 가능
var a99le = '사과임~';


// 3. 특수문자는 ' $ ', ' _ '외에는 사용이 불가능!!!
// var hello! = '반가워~!'; -->> (x) 안됨! 에러남
// var hello^^ = '하잇~'; -->> (x) 얘도 당연히 안됨!
var $bye$$ = '괜차나'; //-->> (o) 가능!!
var _my_family_ = '내 가족'; //-->> (o) 얘도 가능!!


// 4. 띄어쓰기 불가능!
// var our vip members address = '서울시'; -->> 불가능


// snake case (비추!!) : js개발자들이 싫어함. why? python 개발자들과 완력 다툼.. 딱히 이유는 없나보네
var our_vip_members_address = '서울시';

// camel case (추천!!)
var ourVipMembersAddress = '서울시';



// 5. 키워드(예약어)는 사용하지 말 것!
// keyword : 미리 정해져있는 기능적 단어
// var var = 11; var은 ~~라
// var if = 32; if는 조건식이라
// var try = 11; -->> 배우진 않았지만 어차피 빨간 줄이 뜨기 때문에 이상하다 싶으면 하지 말아라.

// 이름은 구체적이고 명확하고 일관성있게 지을 것!
// 예시
// var a = '홍길동';         var memberName;
// var z = '서울시';         var memberAddress;
// var f = 30;              var memberAge;
// var k = '19990101';      var userBirthDay; -->> 이러면 또 안됨!!! 위에는 멤버라면서 왜 user?  -->> memberBirthDay;
// 위 예시같이 지으면 개뚜맞


// alert('메롱');  -->> alert은 브라우저에서만 작동!!!!
// var n1 = 1
// var n2 = 2

// 위에 2개를 간단히 대입하기
// var n1 = 1, n2 = 2   -->> 이런 식으로!


