var round = 0;
var intervalId;
var number;
var clockRunning = false;
var intervalId;

function Quote(q, a, b, c, d, correct, img) {
    this.q = q;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.correct = correct;
    this.imgURL = img;
}

var firstQuote = new Quote("'God help us, we're in the hands of engineers'", 'What is: Jurassic Park', 'What is: Independence Day', 'What is: Powder', 'What is: The Big Chill', 'a', 'assets/images/jurassicPark.jpg');
var secondQuote = new Quote("'That's what's great about the outdoors, it's one giant toilet'", 'What is: Jurassic Park, The Lost World', 'What is: Independence Day', 'What is: The Big Chill', 'What is: Jurassic Park', 'c', 'assets/images/bigChill.jpg');
var thirdQuote = new Quote("'We've come to a point where our technology has surpassed our humanity, but I hope, someday, our humanity will surpass our technology'", 'What is: Jurassic Park, The Lost World', 'What is: Independence Day',
    'What is: Powder', 'What is: Vibes', 'c', 'assets/images/powder.jpg');
var fourthQuote = new Quote("'Oohh, Aahh, that's how all of this starts, but then later there's the running and screaming'", 'What is: Jurassic Park, The Lost World', 'What is: Independence Day', 'What is: Powder',
    'What is: The Big Chill', 'a', 'assets/images/lostWorld.jpg');

$("#play").on("click", function () {

    $("#gameMenu").empty();
    $(this).remove();
    chartCreate();

})

var chartCreate = function () {

    $('#game').empty();
    $('#questionBox').empty();
    clearInterval(intervalId);
    $titleRow = $("<h1>").text("Jeffpardy");
    $titleRow.css('width', '100%', 'height', '100%');
    $("#game").prepend($titleRow);
    for (var i = 0; i < 6; i++) {
        var $topBoxes = $("<button>").text("Jeff");
        $topBoxes.attr('id', 'triviaButton');
        $topBoxes.css('float', 'right');
        $topBoxes.css('width', '16.6%', 'height', '25%');

        for (var j = 0; j < 6; j++) {
            var $middleBoxes = $("<h6>").text("$Jeff");
            $topBoxes.append($middleBoxes);
        }

        $("#game").append($topBoxes);
    }



}


$(document).on('click', 'button', function () {
    console.log('onclick event 1');
    if ($(this).attr('id') == 'triviaButton') {
        $('#game').empty();
        if (round == 0) {
            askQuote(firstQuote);
        }
        else if (round == 1) {
            askQuote(secondQuote);
        }
        else if (round == 2) {
            askQuote(thirdQuote);
        }
        else if (round == 3) {
            askQuote(fourthQuote);
        }
    }
})

askQuote = function (currentQuote) {
    $('#questionBox').empty();
    clearInterval(intervalId);
    console.log('askQuote');
    number = 15;
    round++;
    $quoteBox = $('<p>').text(currentQuote.q);
    $quoteBox.attr('id', 'chosenQuote');
    $answerA = $('<button>').text(currentQuote.a);
    $answerB = $('<button>').text(currentQuote.b);
    $answerC = $('<button>').text(currentQuote.c);
    $answerD = $('<button>').text(currentQuote.d);
    $timer = $('<h1>').text(number);

    $answerA.attr({
        'id': 'a',
        'class': 'answerButton'
    });
    $answerB.attr({
        'id': 'b',
        'class': 'answerButton'
    });
    $answerC.attr({
        'id': 'c',
        'class': 'answerButton'
    });
    $answerD.attr({
        'id': 'd',
        'class': 'answerButton'
    });

    $('#questionBox').append($quoteBox, $answerA, $answerB, $answerC, $answerD, $timer);

    $(document).on('click', 'button', function () {
        console.log('onclick 2');
        if ($(this).attr('class') == 'answerButton') {
            if ($(this).attr('id') == currentQuote.correct) {
                rightAnswer(currentQuote.imgURL)
            }
            else {
                wrongAnswer();
            }
        }
    })

    timer = function () {
        console.log('timer');
        number--;
        $timer.text(number);

        if (number === 0 && round === 4) {
            gameOver();
        }
        else if (number === 0 && round < 4) {
            chartCreate();
        }


    }

    intervalId = setInterval(timer, 1000);
}

rightAnswer = function (currentQuote) {
    $("#questionBox").empty();
    $quoteImage = $('<img />').attr({
        'id': 'quoteImage',
        'src': currentQuote,
        'width': '550x',
        'height': '400px'
    })

    $message = $('<h1>').text('You got it!\n');
    $message.append($quoteImage);
    $('#questionBox').append($message);
    if (round === 4) {
        setTimeout(gameOver, 1000 * 3);
    }
    else {
        setTimeout(chartCreate, 1000 * 3);
    }
}

wrongAnswer = function () {
    $quoteImage = $('<img />').attr({
        'id': 'quoteImage',
        'src': 'assets/images/jephy.gif',
        'width': '550px',
        'height': '400px'
    })
    $('#questionBox').empty();
    $message = $('<h1>').text('Wrong Answer. \n"Checkmate" - Independence Day');
    $message.append($quoteImage);
    $('#questionBox').append($message);
    if (round === 4) {
        setTimeout(gameOver, 1000 * 3);
    }
    else {
        setTimeout(chartCreate, 1000 * 3);
    }
}


var gameOver = function () {
    console.log('gameOver');
    $('#game').empty();
    $('#questionBox').empty();
    $endGame = $('<h1>').text('Thanks for playing!');
    $('#game').append($endGame);
}












