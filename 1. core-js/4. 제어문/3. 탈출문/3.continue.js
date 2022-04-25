
for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // 단어 뜻만 보면 계속하라는건데 탈출문?? 
        // skip이라고 이해하는게 편하다.
    }
    console.log(i);
}

while (true) {
    var n = +prompt('숫자를 입력!');
    if (n === 0) {
        break;
    } else if (n === 1) {
        continue; // continue에 걸리면 아래 무슨 코드가 얼마나 있어도 스킵된 후, 위로 다시 올라가서 반복됨.
    }
    alert('메롱~~~');
}
alert('끝났지롱~~~');