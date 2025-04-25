jQuery(function($) {
  
  //Questions from http://www.w3schools.com/ tutorial quizzes.
  var questions = [
                   {question: 'What does HTML stand for?',
                      choices: ['Hyperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language'],
                        correct:1},
                   {question: 'What is the smallest unit of measurement in a computer?',
                      choices: ['Byte', 'Bit', 'Kilobyte', 'Megabyte'],
                        correct:1},
                   {question: 'What does CPU stand for?',
                      choices: ['Central Program Unit', 'Central Processing Unit', 'Computer Processing Unit', 'Central Power Unit'],
                        correct:1},
                   {question: 'What symbol is used for comments in Python?',
                      choices: ['//', '/* */', '#', '<!-- -->'],
                        correct:2},
                   {question: 'What programming language has a logo with a coffee cup?',
                      choices: ['Python', 'Java', 'C++', 'JavaScript'],
                        correct:1},
                   {question: 'What company created the iPhone?',
                      choices: ['Google', 'Microsoft', 'Apple', 'Samsung'],
                        correct:2},
                   {question: 'What is the keyboard shortcut to copy something?',
                      choices: ['Ctrl + C', 'Ctrl + X', 'Ctrl + V', 'Ctrl + P'],
                        correct:0},
                   {question: 'Which of these is a web browser?',
                      choices: ['Google', 'Microsoft Word', 'Safari', 'Zoom'],
                        correct:2},
                   {question: 'What does "URL" stand for?',
                      choices: ['Universal Resource Locator', 'Uniform Resource Locator', 'United Resource Locator', 'Uniform Real Locator'],
                        correct:1},
                   {question: 'What does Wi-Fi stand for?',
                      choices: ['Wireless Fidelity', 'Wide Frequency Internet', 'Web Fast Internet', 'Wireless Internet'],
                        correct:0},
                   {question: 'In what year did the first iPhone release?',
                      choices: ['2005', '2007', '2010', '2012'],
                        correct:1},
                  ];
  
  var questionNum = 0;
  var questionTotal = questions.length;
  var correctTotal = 0;

  
  $('#testQuestion').hide();
  
  $('#startQuizButton').click(function(){  //start the quiz and show the first question
    $('#message').hide();
    $('#startQuiz').hide();
    $('#testQuestion').show();
    questionDisplay();
  })
  
  $('#testQuestion').on('click', '#submit', function(){
    var answer = $('input:radio[name=guess]:checked').val();
    var correctAnswer = questions[questionNum].correct;
    if (answer == null) {                                //if no answer was selected
      $('#message').html("<p>Please select an answer.</p>");
    } else if (answer == correctAnswer) {                //if correct answer was selected
      $('#message').html("<p>Correct!</p><input id='continue' class='button' type='submit' value='Continue'>");
      correctTotal++;
    } else {                                             //wrong answer selected
      $('#message').html("<p>Wrong! The correct answer is:<br>" + questions[questionNum].choices[correctAnswer] + "</p><input id='continue' class='button' type='submit' value='Continue'>");
    }
    $('#message').show();
  })
  
  $('#message').on('click', '#continue', function(){
    if ((questionNum+1) == questionTotal) {              //quiz is finished, show stats
      $('#message').html("You have answered " + correctTotal + " questions correctly out of " + questionTotal + " total questions.<br>Click on Start Quiz above to take the quiz again.");
      $('#testQuestion').hide();
      $('#startQuiz').show();
      questionNum = 0;                                   //reset variables to start quiz again
      correctTotal = 0;
    } else {                                             //continue to next question
      $('#message').hide();
      questionNum++;
      questionDisplay();
    }
  })


  function questionDisplay() {                           //displays the current question
    $('#questionNum').text("Question " + (questionNum+1) + " of " + questionTotal);
    $('#question').text(questions[questionNum].question);
    $('#choices').empty();
    var choiceTotal = questions[questionNum].choices.length;
    for (var i=0; i<choiceTotal; i++) {                  //displays the answer choices
      $('#choices').append("<input type='radio' class='guess' name='guess' value=" + i + ">" + questions[questionNum].choices[i] + "<br>");
    }
  }

}); 
