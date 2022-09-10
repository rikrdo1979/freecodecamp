function rot13(str) {
  var n;
  var t = [];
  var letterNumber = /^[0-9a-zA-Z]+$/;

  for (var i=str.length; i>0; i--) {

   n = str.charCodeAt(str.length-i);

   if (String.fromCharCode(n).match(letterNumber)){
     if (n > 64 && n < 78) {
       t = t + String.fromCharCode(n+13);}
     else {
       t = t + String.fromCharCode(n-13);}
   }
    else
  {
   t = t + String.fromCharCode(n);}
  }

  return t;
}
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
