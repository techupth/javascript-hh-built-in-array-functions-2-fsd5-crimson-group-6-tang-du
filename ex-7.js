function isPalindrome(string) {
  // Start coding here
  const checkWords = string.split("").reverse().join("");
  return string === checkWords;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
