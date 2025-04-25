jQuery(function ($) {
  //Questions from http://www.w3schools.com/ tutorial quizzes.
  var questions = [
    {
      question: "What kind of loop repeats as long as a condition is true?",
      choices: ["Do-while", "For", "While", "Loop"],
      correct: 2,
    },
    {
      question: "What kind of loop repeats for a set number of times?",
      choices: ["While", "For", "Do-while", "Infinite"],
      correct: 1,
    },
    {
      question: "Who is the creator of the programming language Python?",
      choices: [
        "Dennis Ritchie",
        "Guido van Rossum",
        "Bjarne Stroustrup",
        "James Gosling",
      ],
      correct: 1,
    },
    {
      question: "What was the first version of the internet called?",
      choices: ["World Wide Web", "ARPANET", "Internet Explorer", "The Net"],
      correct: 1,
    },
    {
      question: "Who was the first programmer?",
      choices: ["Alan Turing", "Grace Hopper", "Ada Lovelace", "Bill Gates"],
      correct: 2,
    },
    {
      question:
        "Which female computer scientist developed the first compiler for a computer programming language?",
      choices: [
        "Ada Lovelace",
        "Radia Perlman",
        "Grace Hopper",
        "Barbara Liskov",
      ],
      correct: 2,
    },
    {
      question:
        "Which version control system is widely used for code collaboration?",
      choices: ["Git", "SVN", "CSS", "Docker"],
      correct: 0,
    },
    {
      question: "What does API stand for?",
      choices: [
        "Automated Programming Interface",
        "Advanced Programming Interface",
        "Application Programming Interface",
        "Automated Process Interface",
      ],
      correct: 2,
    },
    {
      question:
        "What is the first thing a computer does when it is powered on?",
      choices: [
        "Boot up the operating system",
        "Open all applications",
        "Run a diagnostic test",
        "Connect to the internet",
      ],
      correct: 0,
    },
    {
      question:
        "What's the name of the computer scientist who co-founded Apple Inc. along with Steve Jobs?",
      choices: ["Bill Gates", "Steve Wozniak", "Mark Zuckerberg", "Larry Page"],
      correct: 1,
    },
    {
      question:
        "Which programming language is often used for building websites and apps on both the front-end and back-end?",
      choices: ["Ruby", "JavaScript", "Java", "PHP"],
      correct: 1,
    },
  ];

  var questionNum = 0;
  var questionTotal = questions.length;
  var correctTotal = 0;

  $("#testQuestion").hide();

  $("#startQuizButton").click(function () {
    //start the quiz and show the first question
    $("#message").hide();
    $("#startQuiz").hide();
    $("#testQuestion").show();
    questionDisplay();
  });

  $("#testQuestion").on("click", "#submit", function () {
    var answer = $("input:radio[name=guess]:checked").val();
    var correctAnswer = questions[questionNum].correct;
    if (answer == null) {
      //if no answer was selected
      $("#message").html("<p>Please select an answer.</p>");
    } else if (answer == correctAnswer) {
      //if correct answer was selected
      $("#message").html(
        "<p>Correct!</p><input id='continue' class='button' type='submit' value='Continue'>"
      );
      correctTotal++;
    } else {
      //wrong answer selected
      $("#message").html(
        "<p>Wrong! The correct answer is:<br>" +
          questions[questionNum].choices[correctAnswer] +
          "</p><input id='continue' class='button' type='submit' value='Continue'>"
      );
    }
    $("#message").show();
  });

  $("#message").on("click", "#continue", function () {
    if (questionNum + 1 == questionTotal) {
      //quiz is finished, show stats
      $("#message").html(
        "You have answered " +
          correctTotal +
          " questions correctly out of " +
          questionTotal +
          " total questions.<br>Click on Start Quiz above to take the quiz again."
      );
      $("#testQuestion").hide();
      $("#startQuiz").show();
      questionNum = 0; //reset variables to start quiz again
      correctTotal = 0;
    } else {
      //continue to next question
      $("#message").hide();
      questionNum++;
      questionDisplay();
    }
  });

  function questionDisplay() {
    //displays the current question
    $("#questionNum").text(
      "Question " + (questionNum + 1) + " of " + questionTotal
    );
    $("#question").text(questions[questionNum].question);
    $("#choices").empty();
    var choiceTotal = questions[questionNum].choices.length;
    for (var i = 0; i < choiceTotal; i++) {
      //displays the answer choices
      $("#choices").append(
        "<input type='radio' class='guess' name='guess' value=" +
          i +
          " id=" +
          i +
          "><label for=" +
          i +
          ">" +
          questions[questionNum].choices[i] +
          "</label><br>"
      );
    }
  }
});
