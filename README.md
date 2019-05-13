# TriviaGame

A basic html/css/javascript application trivia game 'Jeffpardy.'

The game consists of four "rounds" - questions. Each question is a quote from Jeff Goldblum in various roles and the style is meant to simulate Jeopardy.

The javascript functionality relies on a constructor with this.q - being the quote being passed in, this.a being first movie choice, this.b - second choice, this.c - third choice, this.d - fourth choice. this.correct being the correct choice associated with that particular objects quote.

The initial layout of the jeopardy tables is an illusion created by appending divs with jquery and 4 anonymous buttons with that call the same function and initiate the trivia questions.

An incorrect answer will display another quote from, you guessed it, Jeff Goldblum, to acknowledge the answer was incorrect as well as play the Jeopardy wrong answer buzzer sound. Then lead back to chartCreate() to allow the user to continue to another question.

A correct answer will display that the user has guessed the correct movie and display an image corresponding to that movie, then continue to chartCreate() to lead the user to the next question.

Once all 4 questions have been asked, the game will finish with a brief "Thanks for playing!" message.


