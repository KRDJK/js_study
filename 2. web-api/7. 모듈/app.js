
// 외부 js파일 로딩하기

// import { x, hello } from './park.js'; // 이럴 땐 경로 표현할 때 ./ 생략하지 말라고 함.

import * as k from './kim.mjs'   // as 뒤에는 별칭이라 내 마음대로 불러도 됨. k라고 부를 것이다.
import * as p from './park.mjs' // * 은 모든 것이라는 뜻. park.js에서 나온 모든 것을 p라고 부를 것.


// app.js - 메인파일 kim,park은 조각파일

const $box = document.querySelector('.box');
// console.log($box);
$box.textContent = '안녕';

/////////////////////////////////////////

console.log(k.x);
console.log(p.x);

k.hello();
p.hello();