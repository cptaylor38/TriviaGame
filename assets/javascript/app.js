var round = 0;



$("#play").on("click", function () {  //calling play function at play button onclick event

    $("#gameMenu").empty();
    $(this).remove();
    chartCreate();

})

chartCreate = function () {
    $('#game').empty();
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
    if ($(this).attr('id') == 'triviaButton') {
        console.log('function called');
        $('#game').empty();
        if (round == 0) {
            round++;
            askQuote(firstQuote);
        }
        else if (round == 1) {
            round++;
            askQuote(secondQuote);
        }
        else if (round == 2) {
            round++;
            askQuote(thirdQuote);
        }
        else if (round == 3) {
            round++;
            askQuote(fourthQuote);
        }
        else {
            $('#game').empty();
            $('#game').text("Thanks for playing!");
        }
    }
})

function Quote(q, a, b, c, d, correct) {
    this.q = q;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.correct = correct;
}

var firstQuote = new Quote("'God help us, we're in the hands of engineers'", 'Jurassic Park', 'Independence Day', 'Powder', 'The Big Chill', 'a');
var secondQuote = new Quote("'That's what's great about the outdoors, it's one giant toilet'", 'Jurassic Park: The Lost World', 'Independence Day', 'The Big Chill', 'Jurassic Park', 'c');
var thirdQuote = new Quote("'We've come to a point where our technology has surpassed our humanity, but I hope, someday, our humanity will surpass our technology'", 'Jurassic Park: The Lost World', 'Independence Day',
    'Powder', 'Vibes', 'c');
var fourthQuote = new Quote("'Oohh, Aahh, that's how all of this starts, but then later there's the running and screaming'", 'Jurassic Park: The Lost World', 'Independence Day', 'Powder',
    'The Big Chill', 'a');


askQuote = function (currentQuote) {
    $quoteBox = $('<p>').text(currentQuote.q);
    $answerA = $('<button>').text(currentQuote.a);
    $answerB = $('<button>').text(currentQuote.b);
    $answerC = $('<button>').text(currentQuote.c);
    $answerD = $('<button>').text(currentQuote.d);

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

    $quoteBox.append($answerA, $answerB, $answerC, $answerD);
    $('#questionBox').append($quoteBox);

    $(document).on('click', 'button', function () {
        if ($(this).attr('class') == 'answerButton') {
            if ($(this).attr('id') == currentQuote.correct) {
                $('#questionBox').empty();
                chartCreate();
            }
            else {
                $('#questionBox').empty();
                chartCreate();

            }

        }
        else {
            console.log('condition not met');
        }
    })


}










