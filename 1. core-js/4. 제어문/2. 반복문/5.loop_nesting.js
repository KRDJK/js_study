
    // var level = 2; // 구구단 2단 단수 저장
for(var level = 2; level<=9; level++) { // for로 한번 더 묶음.
    for (var line = 1; line <= 9; line++){ // line은 1->9 될 때까지 돌았다가 다시 또 1부터 돔.
        console.log(`${level} x ${line} = ${level*line}`);
    } // end inner for
    console.log('====================================================');
} // end outer for

// 하위 for이 다 끝날 때까지 계속 돌다가 끝나면 다시 위로 돌아가서 보고 또 하위 for에 진입.


// level = 3; // 구구단 3단 단수 변환 저장. 이미 선언은 위에 해서 var 말고
// for (var line = 1; line <= 9; line++){
//     console.log(`${level} x ${line} = ${level*line}`);
// }

// console.log('====================================================');

for (var i = 1; i <= 3; i++) { // 3회 루프 
    console.log('짹짹~~~'); // 3회 실행
    for (var j = 1; j <= 4; j++) { // 4회 루프 위 루프 한번 당 4회 루프가 됨. 3x4=12회
    
        for (var k = 1; k <= 2; k++) {// 2회 루프 3x4x2
        console.log(`안녕! ${i} - ${j}`);
        }
        console.log('메롱!!'); // 12회 실행
    }
}