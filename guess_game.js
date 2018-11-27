document.getElementById('startgame').onclick = function startGame() {

  console.log('user started game');

  var compChoice = Math.floor(Math.random() * 20);
  //creating function for 'button' that only runs
  //when startgame is clicked

  document.getElementById('button').onclick = function storeGuess() {
    //computer selecting random number between 1 and 20

    //when user clicks "storeGuess" computer variable is created
    var userChoice = document.getElementById('text').value;
    //ex:const comp = document.getElementById('total').value

    //creating if statement
    if (Number(userChoice) < Number(compChoice)) {
      document.getElementById('message').innerHTML = 'TOO LOW';
      document.getElementById('statement').innerHTML = 'TRY AGAIN';

    } else if (Number(userChoice) > Number(compChoice)) {
      document.getElementById('message').innerHTML = 'TOO HIGH';
      document.getElementById('statement').innerHTML = 'TRY AGAIN';

    } else if (Number(userChoice) == Number(compChoice)) {
      document.getElementById('message').innerHTML = 'CORRECT!';
      document.getElementById('statement').innerHTML = 'YOU GUESS ' + compChoice;

    }


  }

  document.getElementById('restart').onclick = function refreshPage() {
    window.location.reload();
  }

}
