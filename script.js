function reverseStr(str) {
  const reversed = str.split("").reverse().join("");
  return reversed;
}

function isPalindrome(str) {
  const reversed = reverseStr(str);
  return reversed === str;
}

function convertDateToStr(date) {
  var dateStr = { day: "", month: "", year: "" };

  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();
  return dateStr;
}
