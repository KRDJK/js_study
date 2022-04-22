var startHeight = +prompt('몇 cm부터: ');
var endHeight = +prompt('몇 cm까지: ');
var termHeight = +prompt('몇 cm마다: ');


// 표준몸무게 공식은 (키 - 100 ) * 0.9
var standardweight

var message = ''; // 메세지들을 저장할 변수. (한 군데에 몰기 위해서)
// 이 메세지 변수는 while 안에 넣으면 기껏 저장해둔 것이 또 공란에서부터 더해지기 때문에
// 바깥(while보다 상위)에 빼둬야 함!!!

while (startHeight <= endHeight) {
    if ((endHeight-startHeight) % termHeight === 0) {
        standardweight = (startHeight-100)*0.9
        message += `${startHeight} ${standardweight}kg\n`; 
        // 한번에 보이게 하기 위해서 message란 변수를 만들어서 계속 쌓음.
    }
    startHeight++;
}
alert(`${message}`); 
// alert을 while에 묶이게 하면 반복이 되면서 termheight에 걸릴때마다 띄우기 때문에
// 바깥에 배치.