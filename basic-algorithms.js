var hacker1 = "Roberto";
console.log("the drivers name is " + hacker1);
var hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
} else {
  console.log("wow, you both got equally long names, " + hacker2.length + " characters!!")
}

var nameCapitals = "";
for (var i = 0; i < hacker1.length; i++){
  if (i === hacker1.length - 1){
  nameCapitals += hacker1.charAt(i).toUpperCase();
  } else {
    nameCapitals += hacker1.charAt(i).toUpperCase() + " ";
  }
}
console.log(nameCapitals);

var nameReverse = "";
for (var i = hacker2.length; i >= 0 ; i--){
  nameReverse += hacker2.charAt(i);
}
console.log(nameReverse);

var nameOrder = [hacker1.toLowerCase(), hacker2.toLowerCase()].sort();
console.log(nameOrder);


var nameOrder = hacker1.localeCompare(hacker2);
if (nameOrder === -1){
  console.log ("The driver's name goes first");
} else if (nameOrder === 1 ){
  console.log ("Yo, the navigator goes first definitely");
} else {
  console.log ("What?! You both got the same name?");
}

//Ejercicio Palindromos

var palindrome = prompt("write a palindrome");

function checkPalindrome(str) {
  var re = /[^A-Za-z0-9]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

if (checkPalindrome(palindrome) === true) {
  console.log("True!");
} else {
  console.log("Nope :(")
}


// Ejercicio Lorem Ipsum

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur sem at tristique congue. Suspendisse purus libero, imperdiet fringilla vestibulum ac, mattis quis felis. Maecenas ornare condimentum purus, a sagittis nunc condimentum vitae. Ut ornare sem orci, vitae faucibus ipsum varius at. Ut eu ex sed mi luctus rhoncus. Phasellus nec nisl faucibus, gravida tellus pretium, laoreet sem. Etiam malesuada dolor rutrum semper hendrerit.";

function wordCount(str) { 
  return str.split(" ").length;
}

console.log(wordCount(lorem));

function etCount(str){
  return str.split("et").length;
}
console.log(etCount(lorem));