//page load
$(document).ready(function fade(){
  
  $('button').removeClass('selected');
  
  $(".fade").hide(0).delay(400).fadeIn(1000);
})

$('button').on('click', function(){
  
  $('button').removeClass('selected');
  
  $(this).addClass('selected');
});

//easy mode
$('#easy').on('click', function startEasy(){
  
  
  //declaring all variables
  var resultDisplay = $('#result-display');
  var compChoiceEasy = Math.floor(Math.random()* 10);
  console.log('user selected easy mode');
 
 
  //hiding choose-result
  $("#choose-result").hide(0);
  $('#choose-result').text('1 and 10')
 
  //fading in choose-result
  $('#choose-result').delay(0).fadeIn(300);
  
  
  //creating variable for computer choice
  console.log(compChoiceEasy);
  
 //submitting value 
 $('#submit').on('click', function sendValue(){
  
  //creating variable from input
  var userInput = $('#number-input').val();
  console.log(userInput);
 
  //converting string into integer
  var userInputInt = parseInt(userInput);


    //if statement comparing value to computer choice
    if(userInputInt < compChoiceEasy){
        $(resultDisplay).text('WRONG: TOO LOW')
      }
    else if(userInputInt > compChoiceEasy){
        $(resultDisplay).text('WRONG: TOO HIGH')
      }
    else if(userInputInt = compChoiceEasy){
        return $(resultDisplay).text('CORRECT')
      }
  
  })
});

//hard mode
$('#hard').on('click', function startHard(){


  //creating variable for computer choice
  var compChoiceHard = Math.floor(Math.random()* 50);
  var resultDisplay = $('#result-display');
  console.log('user selected hard mode');
  
  //console log computer choice in developer tools
  console.log(compChoiceHard);
  
  //fade-ins


  //hiding choose-result
  $("#choose-result").hide(0);
  $('#choose-result').text('1 and 50')
  //fading in choose-result
  $('#choose-result').delay(0).fadeIn(300);
  
  
 //submitting value 
 $('#submit').on('click', function sendValue(){

  //creating variable from input
  var userInput = $('#number-input').val();
  console.log(userInput);


  //converting string into integer
  var userInputInt = parseInt(userInput);
  
    //if statement comparing value to computer choice
    if(userInputInt < compChoiceHard){
      $(resultDisplay).text('WRONG: TOO LOW')
    }
    else if(userInputInt > compChoiceHard){
      $(resultDisplay).text('WRONG: TOO HIGH')
    }
     else if(userInputInt = compChoiceHard){
      return $(resultDisplay).text('CORRECT')
    }
  
  })
});




//reset button
$('#reset').on('click', function reloadPage(){
  location.reload();
  console.log('page reloaded: user restarted game')
});