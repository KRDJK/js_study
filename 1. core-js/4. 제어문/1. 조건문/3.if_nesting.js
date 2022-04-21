// 중첩 if

var playerHeight = +prompt('당신의 신장(키)를 입력하세요.');



// 1차로 키만 검사함. why? 키에서 안되면 나이는 물어볼 필요도 없으니까.
if (playerHeight >= 140) {
    // 140이 넘으면 나이를 물어보게 됨.
    var playerAge = +prompt('당신의 나이를 입력하세요.');
    if (playerAge >= 8) {
        alert('놀이기구에 탑승할 수 있습니다.');
    } else if (playerAge >= 6) {
        alert('보호자 동반시 놀이기구에 탑승할 수 있습니다.');
    } else {
        alert('나이 제한 때문에 놀이기구에 탑승할 수 없습니다.');
    }
} else {
    alert('키 제한 때문에 놀이기구에 탑승할 수 없습니다.');
}

alert('오늘 하루 즐거운 시간되세요!');