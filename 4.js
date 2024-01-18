//Write a JavaScript function that reverses a number.
//Example x = 32243;
//Expected Output : 34223



function reverseNum(number) {
    const reversedString = number.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
  }
  
  const x = 32243;
  const reversedX = reverseNum(x);
  console.log(reversedX); 
  