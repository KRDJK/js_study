var number = +prompt('양의 정수를 입력하세요.');

// var reverse

var start = 1


if (number <= 0) {
    alert('♬양의 정수만 입력해주세요.');
} else if (number > 9999) {
    alert('너무 큰 수를 입력하였습니다. (최댓값: 9999)');
} else {
    while (start <= number) {
        parseint(number / 100); // 10의 n승은 10**n이 맞나?
    }
    alert(`${number}을(를) 거꾸로 읽으면 ${}입니다.`)
}

// parseint(27/5) -->> 소수점은 제외하고 정수부분만 알려줌.