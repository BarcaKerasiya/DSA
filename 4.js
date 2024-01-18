//Write a JavaScript function that reverses a number.
//Example x = 32243;
//Expected Output : 34223

function revers(number){
  const reveseStr = number.toString().split('').reverse().join('')
  return parseInt(reveseStr, 10)
}

const x = 32243
const reveseX = revers(x)
console.log(reveseX)