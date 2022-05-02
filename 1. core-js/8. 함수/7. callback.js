

// n회 반복하면서 특정 일을 하는 함수
function foo(n, f) { //f라는 함수 자체를 매개변수로 받는다.
    for (var i = 0; i < n; i++) {
        // 여기 안에서 하고 싶은게 무궁무진하게 많을 때!!
        f(); // ==> 내가 이 함수를 활용하고 싶은 위치에서!
    }
}

foo(5, function() {
    console.log('안뇽?');
}); // 함수를 처리할 때 함수 자체를 매개변수로 줄 수도 있다.


foo (4, function() {
    console.log('안녕녕~');
    console.log('메롱롱~');
    
});

foo(2, () => (console.log('빠빠이!'))); // 화살표 함수도 쓸 수 있다.

console.log('=======================================================');


// 정수 n을 전달하면 1부터 n까지의 숫자를 특정 조건에 따라 출력하는 함수.
// 특정 조건이라 함은 (홀수면 출력해라, 짝수면 출력해라 등등등)
// 특정 조건을 맞추려면 조건식(if문 속 조건식)이 무궁무진하게 필요함.
// 그 무궁무진한 부분을 함수로 처리해서 받자.

// cb(콜백함수) : 아래의 경우, i의 특정 조건을 담고 있는 함수.
function showNumber(n, cb) {
    for (var i = 1; i <= n; i++) {
        if(cb(i)) { // cb는 특정 조건을 만들어주는 함수.
            console.log(i);
            // i가 하단의 x부분에 들어감.
        }
    }
}


// 1 ~ 10까지의 3의 배수 출력하고 싶으면??
showNumber(10, function(x) { // 이 함수가 위의 cb가 되면서 i가 올라갈 때마다 x에 그대로 들어가게됨.
    return x % 3 === 0; // 이 부분이 if에 조건식 부분에 들어감.
});

/*
위 함수를 화살표 함수로 간략하게 만든 버전.
showNumber(10, x => x % 3 === 0);
*/



// 1 ~ 100까지의 24의 배수 출력.
showNumber(100, function(m) { // i가 m에 들어온다.
    return m % 24 === 0;
});

/*
showNumber(100, m => m % 24 === 0);
*/



// 1 ~ 20까지 숫자 중 홀수만 출력하는데, 
// 홀수 하나 출력할 때마다 메롱이라고 출력하고 싶다면..??
showNumber(20, function(j) {
    console.log('메롱');
    return j % 2 === 1;
});


console.log('=================================================');

function customfilter(numbers, predicate) {
    var iList = []; // 필터링 후의 배열
    for (var i = 0; i < numbers.length; i++) {
        if(predicate(numbers[i])) {
            iList.push(numbers[i]);
        }
    }
    return (iList);
}

var numbers = [10, 30, 50, 22, 63];
// var results = numbers.filter(number => number <= 50);

var results = customfilter(numbers, function(k) {
    return k % 10 === 0;
});

console.log(results); // 출력결과는 [10, 30, 50]