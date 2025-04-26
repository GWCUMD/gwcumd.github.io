jQuery(function ($) {
  //Questions from http://www.w3schools.com/ tutorial quizzes.
  var questions = [
    {
      question: "What kind of number system does the computer use?",
      choices: ["Decimal", "Hexadecimal", "Binary", "Octal"],
      correct: 2,
    },
    {
      question:
        "What is the term for a system where data is stored in a table format with rows and columns?",
      choices: [
        "Hierarchical Database",
        "Relational Database",
        "Network Database",
        "Object-Oriented Database",
      ],
      correct: 1,
    },
    {
      question:
        "What language does C get compiled to before it runs on the computer?",
      choices: ["Assembly Language", "Machine Code", "Java", "Python"],
      correct: 0,
    },
    {
      question:
        "Radia Perlman, known as the “Mother of the Internet,” invented which network protocol?",
      choices: [
        "HTTP (Hyper-Text Transfer Protocol)",
        "TCP/IP (Transmission Control Protocol over Internet Protocol)",
        "STP (Spanning Tree Protocol)",
        "FTP (File Transfer Protocol)",
      ],
      correct: 2,
    },
    {
      question:
        "Which British mathematician and computer scientist made early contributions to AI and was one of the first female professors at MIT?",
      choices: [
        "Margaret Hamilton",
        "Ada Lovelace",
        "Barbara Liskov",
        "Rosalind Franklin",
      ],
      correct: 0,
    },
    {
      question: 'What does the term "Big O" notation describe?',
      choices: [
        "The time taken for the program to compile",
        "The amount of memory a program uses",
        "The efficiency of an algorithm",
        "The speed of a computer",
      ],
      correct: 2,
    },
    {
      question:
        "Which technology is responsible for enabling voice assistants like Siri and Alexa to understand spoken commands?",
      choices: [
        "Machine Learning",
        "Natural Language Processing",
        "Augmented Reality",
        "Blockchain",
      ],
      correct: 1,
    },
    {
      question:
        'Which technology enables self-driving cars to "see" their surroundings?',
      choices: ["Lidar", "GPS", "Neural Networks", "Radar"],
      correct: 0,
    },
    {
      question:
        "What technology is behind facial recognition systems used for unlocking phones or for security purposes?",
      choices: [
        "Artificial Intelligence",
        "Computer Vision",
        "Cloud Computing",
        "Internet of Things",
      ],
      correct: 1,
    },
    {
      question:
        "What algorithm helps Netflix recommend movies and shows based on your previous watching habits?",
      choices: [
        "PageRank",
        "Collaborative Filtering",
        "Dijkstra’s Algorithm",
        "Neural Networks",
      ],
      correct: 1,
    },
    {
      question:
        "What technology allows people to make video calls to each other over the internet, like Zoom or FaceTime?",
      choices: [
        "VoIP (Voice over Internet Protocol)",
        "Bluetooth",
        "Wi-Fi",
        "Augmented Reality",
      ],
      correct: 0,
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
      $("#message").html("<p>Please select an answer.</p>");
    } else {
      // disable all choices and the submit button
      $("input:radio[name=guess]").prop("disabled", true);
      $("#submit").prop("disabled", true);
  
      if (answer == correctAnswer) {
        $("#message").html(
          "<p>Correct!</p><input id='continue' class='button' type='submit' value='Continue'>"
        );
        correctTotal++;
      } else {
        $("#message").html(
          "<p>Wrong! The correct answer is:<br>" +
            questions[questionNum].choices[correctAnswer] +
            "</p><input id='continue' class='button' type='submit' value='Continue'>"
        );
      }
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
    // reset and re-enable inputs
    $("#message").hide();
    $("#choices").empty();
    $("input:radio[name=guess]").prop("disabled", false);
    $("#submit").prop("disabled", false);
  
    $("#questionNum").text(
      "Question " + (questionNum + 1) + " of " + questionTotal
    );
    $("#question").text(questions[questionNum].question);
  
    var choiceTotal = questions[questionNum].choices.length;
    for (var i = 0; i < choiceTotal; i++) {
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
