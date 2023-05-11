function reverseStr(str) {
  const reversed = str.split("").reverse().join("");
  return reversed;
}

function isPalindrome(str) {
  const reversed = reverseStr(str);
  return reversed === str;
}
