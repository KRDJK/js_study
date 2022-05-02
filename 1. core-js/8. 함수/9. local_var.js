
// 매개변수 x: 지역스코프 (아래에 전역변수 x와 다른 애임.)
function outer(x) {
    var y = 'outer local y';
    var z = 'outer local z';
    console.log(`x: ${x}`); // 매개변수 x 참조.

    function inner() {
        var x = 'inner local x';
        var z = 'inner local z';
        console.log(x); // 본인 지역 우선!!
        console.log(z);
        console.log(y); // outer 함수가 안끝난 상태이기 때문에 y 참조 가능.
    }
    inner();
}

var x = 'global x';

outer('outer param x');



// 사이트 전체 정책적 할인율
var slaeRate = 0.1; // 전역변수


// 코드 400줄 ~~~


// 임시이벤트로 할인율을 1시간동안만 20퍼로 상승
function eventSale() {
    var saleRate = 0.2; // 임시 할인율 변수
} // 이렇게 함수에다 넣어놨으면 이전에 0.1로 설정했던게 사라지지 않지.
function vipSalePolicy() {
    var saleRate = 0.3;
}

// 코드 500줄 ~~~ 


console.log(saleRate);
// 나는 임시적으로 20퍼를 하고 싶었는데 이렇게 되면 앞의 10퍼가 날아가고 20퍼로 변경됨.