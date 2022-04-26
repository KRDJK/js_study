var numbers = []; // 입력받은 숫자들을 배열할 배열 변수.

var result = 0; // 총합을 저장할 변수 밑에 if문에서 선언 가능했을듯. 안되네? 선언과 동시에 += 이 안되는구나!

while (true) {
    var userNum = prompt('숫자를 입력하세요.\n 그만두려면 \'그만\'이라고 입력하세요!');
    if (userNum === '그만') {
        for (var i = 0; i < numbers.length; i++) {
            result += numbers[i]; // 밑에서 아예 숫자로 배열을 변환하여 넣었기 때문에 Number로 변환하라는건 안해도 됨.
        }

        alert(`입력한 숫자 배열: [${numbers}]\n입력한 숫자 배열의 총합: ${result}`);
        break;
    } else {
        numbers.push(+userNum); // 아예 여기서 숫자로 변환하여 배열에 넣어줌.
    }
}