/* --- Global Variables ---*/

var rNumber = getRandom();
var guesses = 1;
	
/*--- Functions ---*/

//get random number
function getRandom() {
  return Math.floor (Math.random() * 101);
}

//calculate proximity of guessed number
function between(prox, min, max) {
      return prox >= min && prox <= max
}

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  });

  /*--- Click on "+ New Game" to reset and start new game ---*/
  $('.new').click(function() {
  	rNumber = Math.floor (Math.random() * 101);
    guesses = 1;
    $('#feedback').replaceWith('<h2 id="feedback">' + "Make your Guess!" + '</h2>');
    $('#count').text(guesses);
    $("#guessList").text('');
  });

 

  /*--- Take user guess and evaluate answer ---*/
  $('.guessForm').submit(function(event) {
    event.preventDefault();
    var gNumber = parseInt($('#userGuess').val());
    var prox = rNumber - gNumber;
    guesses += 1;
  	$('#count').text(guesses);
  	$('#userGuess').val('');
  		
      // validate for empty or invalid guess and append li to ul
      if (prox === 0) {
        $('#feedback').replaceWith('<h2 id="feedback">' + "You GUESSED the number! " + gNumber + '</h2>');
        $("#guessList").append('<li class="correct">' + gNumber + '</li>');
        $('#userGuess').val('');
      }
      else if (gNumber !== "" && gNumber >= 1 && gNumber <= 100 && gNumber % 1 === 0) {
        $("#guessList").append('<li>' + gNumber + '</li>');
      }
      else if (gNumber < 1 || gNumber > 100 || gNumber % 1 !== 0) {
        $("#guessList").append('<li>">' + "Error" + '</li>');
        $('#feedback').replaceWith('<h2 id="feedback">' + "Enter number 1-100 (no decimals)" + '</h2>');
        $('#userGuess').val('');
      }
      
      /*--- Use guess procimity number and provide proper feedback ---*/  
  		if (between(prox, -5, -1)) {
  			$('#feedback').replaceWith('<h2 id="feedback">' + "You are BOILING and too high!" + '</h2>');
  			$('#userGuess').val('');
  		}
  		else if (between(prox, -10, -6)) {
  			$('#feedback').replaceWith('<h2 id="feedback">' + "You are HOT and too high!" + '</h2>');
  			$('#userGuess').val('');
  		}
  		else if (between(prox, -30, -11)) {
  			$('#feedback').replaceWith('<h2 id="feedback">' + "You are WARM and too high!" + '</h2>');
  			$('#userGuess').val('');
  		}
  		else if (between(prox, -60, -31)) {
  			$('#feedback').replaceWith('<h2 id="feedback">' + "You are COLD and too high!" + '</h2>');
  			$('#userGuess').val('');
  		}
  		else if (between(prox, -99, -61)) {
  			$('#feedback').replaceWith('<h2 id="feedback">' + "You are FREEZING and too high!" + '</h2>');
  			$('#userGuess').val('');
  		}
  		else if (between(prox, 1, 5)) {
  			$('#feedback').replaceWith('<h2 id="feedback">' + "You are BOILING and too low!" + '</h2>');
  			$('#userGuess').val('');
  		}
  		else if (between(prox, 6, 10)) {
  			$('#feedback').replaceWith('<h2 id="feedback">' + "You are HOT and too low!" + '</h2>');
  			$('#userGuess').val('');
  		}
  		else if (between(prox, 11, 30)) {
  			$('#feedback').replaceWith('<h2 id="feedback">' + "You are WARM and too low!" + '</h2>');
  			$('#userGuess').val('');
  		}
  		else if (between(prox, 31, 60)) {
  			$('#feedback').replaceWith('<h2 id="feedback">' + "You are COLD and too low!" + '</h2>');
  			$('#userGuess').val('');
  		}
  		else if (between(prox, 61, 99)) {
  			$('#feedback').replaceWith('<h2 id="feedback">' + "You are FREEZING and too low!" + '</h2>');
  			$('#userGuess').val('');
  		}
   })
});


