//Using a for loop output the elements in reverse order

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output:
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

const reverserOrder = (arr) => {
  //   return arr.reverse().join(" ");
  let str = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    str = str + arr[i] + " ";
  }
  return str;
};

console.log(
  reverserOrder([43, "what", 9, true, "cannot", false, "be", 3, true])
);
