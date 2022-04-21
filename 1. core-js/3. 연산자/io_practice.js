var userName = prompt('이름을 입력하세요.');
var userAge = +prompt('나이를 입력하세요.');

// 2023 - age가 아니라 의도가 느껴지게 아래처럼 하는게 코딩에서는 더 낫다.
var birthYear = 2022 - userAge + 1;

                        // 아래에 수식 자체를 넣어도 되지만 그러면 나중에 또 이것을 입력해야 할 때 똑같이 수식으로 입력 해야함.
alert(`${userName}님은 ${birthYear}년생이시군요~?`);

