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


// '  ' 안에 숫자를 넣으면 무조건 문자열이 됨!!
var ex1 = '100';

// '\n'  <<-- 문자라서 ' ' 로 감쌌음.


// 템플릿 리터럴 (ES6+ 문법)
// 문장에선 줄 바꿈을 허락하지 않음
var tag1 = '<ul><li><a href="#">목록1</a></li></ul>';
console.log(tag1);

// var tag1 = '<ul>
//                 <li>
//                     <a href="#">목록1</a>
//                 </li>
//             </ul>';

// 에러남.
// 그렇다고 사이사이 \n, \t 를 넣어가며 하냐? (예전엔 그렇게 했다고 함.. 와우..) 현재는 ㄴㄴ

// ver 2015 이후!! ES6버전
var template = `
<ul>
    <li>
        <a href="#">목록1</a>
    </li>
</ul>
`
// `` 백틱을 활용하면 줄바꿈을 해가며 해도 가능


// 학생 이름과 영어 점수를 같이 출력하고 싶은데,
// 학생이 여러명일 경우..
var studentName = '김철수';
var engScore = 88;

// 원시적 방법 (이렇게 하면 띄어쓰기도 안에 넣어줘야 하네..? 개불편..)
console.log(studentName + '님의 영어점수는' + engScore + '점입니다.');


// 템플릿 리터럴 방법!!
// 앞뒤에 백틱을 무조건 붙이고  바뀌는 부분은 ${}를 넣음.
// {}부분에 변수 이름을 넣음.
// 훨씬 편할 뿐더러 줄바꿈(엔터쳐서)이 가능
console.log(`${studentName}님의 영어점수는 ${engScore}점입니다.`);
