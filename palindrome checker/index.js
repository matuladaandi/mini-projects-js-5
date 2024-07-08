debugger;
const input = document.getElementById("input");

function reverseString(str) {
  // param str split, then the order is reversed and the results are combined again and separated by space
  return str.split("").reverse().join("");
}

function check() {
  // get value on input
  const value = input.value;

  //   holds the reverseString function using the reverse variable
  const reverse = reverseString(value);

  if (value === reverse) {
    alert("P O L I N D R O M E");
  } else {
    alert("not today");
  }
  input.value = "";
}
