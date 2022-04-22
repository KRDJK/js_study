var wantStar = +prompt('몇개의 *을 출력할까요?');

start = 1;

star = '';

while (start <= wantStar) {
    if (start % 5 === 0) {
        star += '*\n'
    } else {
        star += '*';
    }
    start++;
}

alert(`${star}`);