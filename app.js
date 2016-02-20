
var  = 0;
var  = prompt();
var  = 0;
var user = prompt('Please mark your favorite product');
alert("Hello, " + user + " very nice to meet you");
console.log('' + user);
if (user === ''){
  console.log('true')
} else if (userName === ''){
  console.log('        ');
} else {
  console.log('');
  console.log('');
}
  //Question One
var questionOne = prompt("");
console.log('This is the answer to the first question:' + questionOne);
var num1 = parseInt(questionOne);
if (num1 === 3){
  alert("Correct " + userName + " ");
  correctAnswers++;
} else if (num1 > 3){
  alert("");
} else if (num1 < 3){
  alert("");
}
  //Question Two
var questionTwo = prompt("")
console.log('This is the answer to the first question:' + questionTwo);
var num1 = parseInt(questionTwo)
if (num1 === 6){
  document.write('Correct , ');
  alert("Correct "  + userName + " ");
  correctAnswers++;
} else if (num1 < 6){
  alert("");
} else if (num1 > 6){
  alert("")
}
    //Question three
var questionThree = prompt("Question 3: ").toLowerCase()
console.log('This is the answer to the first question:' + questionThree);
console.log(questionThree);
if (questionThree === 'yes'){
  correctAnswers++;
  alert("Correct "  + userName + " ");
} else if (questionThree === 'No'){
  alert("No, ")
}
// Question four
var questionFour = parseInt(prompt("Question 4: "))
console.log('This is the answer to the first question:' + questionFour);
console.log(questionFour);
if (questionFour === 1){
  alert("Correct "  + userName + "");
  correctAnswers++;
} else if (questionFour > 1){
  alert("You guessed too high, only one dog");
}
  alert("You guessed " + correctAnswers + " Out of four correct")
console.log('This is the answer to the first question:' + correctAnswers);
console.log(correctAnswers);
var num1 = (correctAnswers);
if (num1 === '4'){
  alert("Way to go! "  + userName + "You answered all four questions correctly!");
} else if (num1 === '3'){
  alert("Bummer ," + userName + "You only guessed three correctly.")
} else if (num1 === '2'){
  alert("Bummer ," + userName + "You only guessed two correctly.")
} else if (num1 === '1'){
  alert("Bummer , " + userName + "You only guessed one correctly.");
};
