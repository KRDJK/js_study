// 프로그램 내에서 사용할 데이터를 저장해놓고 쓰고 싶어요

// 1. 변수를 선언 (변수를 만들다) : var
var result;


// 2. 변수의 초기화(reset이 아니고 initialize : 값을 저장.)
result = 10 + 20; // 프로그램에서 '=' 기호는 equl이란 뜻이 아닌, 대입하라는 뜻!!
    // 10 + 20의 결과를 result에 대입(저장)하라.!!!


// result에 저장된 값을 화면에 보여줘라    
console.log(result);


// 3. 변수의 값 수정(변경)
result = 50;
console.log(result);


// 4. 변수에 변수값을 저장할 수도 있다.
result = result * 2;
console.log(result); // 100

console.log(result + 10); // 110을 출력하지만 result가 변하진 않음
console.log(result); // 100 why? 위에서 110값이 나온걸 저장해주지 않았으니까!


// 5. 변수는 선언과 초기화를 동시에 할 수 있음.
var number = 70;


// 변수끼리의 연산도 가능
console.log(result - number);

number = result - 20;
console.log(number);


// 변수에 텍스트도 대입 가능
// 문자열을 저장할 때는 따옴표('', "" 둘 다 가능하나, 홑 따옴표 위주로 씀.) 사용
var friend_name = '고길동';