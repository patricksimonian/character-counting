var args = process.argv.slice(2);
var string = args.join("");
var originalString = args.join(" ");
/*
  charCounter takes in a string that has been joined
  before splitting each character into an array which is itterated in loop
  for each character, it is matched against the string (with regex) and the amount
  of matches is inputed into the characterCount object
*/
function CharCounter(stringEntered) {
  var characterCount = {};
  var stringtoTest = stringEntered.split("");

  for(var char of stringtoTest) {

      var exp = new RegExp(char,'g');
      characterCount[char] = stringEntered.match(exp).length;

  }
  return characterCount;
}
 /*for each character in string
  variable = number of times that character shows up
   that character equals a regular expression
   match that regexp to the string and put in variable
   make the object at the property of the character = to the variabl
}
testString1 = 'yadidadidadiDAH';
testString2 = 'our team is possibily the best';
*/
console.log(CharCounter(string));