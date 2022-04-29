/*
    Q8)
        1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
        
        2. bmi지수를 계산하여 반환함과 동시에 

        3. bmi가 25.0이상이면 "당신은 과체중입니다." 
        18.5이하면 "당신은 저체중입니다." 
        나머지는 "당신은 정상체중입니다."를 출력하는 
        calcBMI라는 함수를 정의하고 호출하세요. 
        
        4. 체중범위 출력은 함수 내부에서 작성되어야 합니다. 

        # bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
       
        - 호출 예시 : calcBMI(178.4, 78.2);
    
        - 출력 예시:
            키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

*/

function calcBMI(height, weight) {
    var bmi = weight / ((height/100) * (height/100));
    alert(`키: ${height}, 체중: ${weight}의 체질량지수는: ${parseInt(bmi*100)/100}입니다.`);
    if (bmi >= 25) {
        alert('당신은 과체중입니다.');
    } else if (bmi <= 18.5) {
        alert('당신은 저체중입니다.');
    } else {
        alert('당신은 정상체중입니다.');
    }
    return bmi;
}

// 원하는 자리수만큼 반올림해주는 함수
function round(number, pos) {
    return Math.round(number * 10 ** pos) / 10 ** pos;
}


// 호출부
var height = +prompt('키를 입력하세요. (단위: cm)');
var weight = +prompt('몸무게를 입력하세요. (단위: kg)');
calcBMI(height, weight);