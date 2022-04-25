
var rn = Math.floor(Math.random()*8)+2;

var message = '';

for (var i = 1; i <= 9; i++) {
    message += `${rn} x ${i} = ${rn*i}\n`;
}

console.log('=============================');
console.log(`랜덤구구단: ${rn}`);
console.log('=============================');
console.log(message);