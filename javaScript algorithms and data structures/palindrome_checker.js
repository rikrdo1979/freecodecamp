function palindrome(str) {

  str = str.replace(/[^0-9a-z]/gi, '');
  str = str.toLowerCase();
  var i = str.length - 1;
  var string = "";
  
  while (i >= 0) {
    string = string + str[i];
    i--;
  }
  
  if (str === string) {
    return true;
  }
  
  else {
    return false;
  }
  
}

palindrome("eyE %");
