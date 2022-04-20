var greeting;
greeting = 'hello'; // 홑따옴표
greeting = "안녕하세요"; // 겹따옴표
greeting = `콘니치와`; // 백틱
// 변수에는 따옴표 쓰지 않음. 텍스트가 아니다.


console.log(typeof greeting);


var str1 = '그는 나에게 "메롱"이라고 하고 도망갔다.';
console.log(str1);

var str2 = "Let's Go!";
console.log(str2);

var str3 = "Let's Go! \"together\""; // ` ` 을 써도 되지만, 문자로 인식하길 바라면 그 앞에 백슬래시 \ 를 넣어라.
console.log(str3);

// 경로표시: 리눅스 - / 정방향 슬래시  ,  윈도우 - \ 역슬래시를 사용.
var str4 = 'E:\\temp\\new.png'; // 중간에 백슬래시가 방해되면 \\ 백슬래시를 2번 쓴다.
console.log(str4);


var str5 = '멍멍이\n\n\n\n야옹이';
console.log(str5);


var str6 = '멍멍이\t\t\t야옹이';
console.log(str6);