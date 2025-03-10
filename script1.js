const quizData = [
    {
        question: "What is the full form of HTML?",
        options: ["HyperText Markup Language", "Hyper Text Makeup Learning", "Hyperlink Text Menu Language", "HighTech Mainframe Layout"],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Colorful Sheet Styling"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a programming language?",
        options: ["Python", "Java", "Windows", "C++"],
        answer: 2
    },
    {
        question: "What is the purpose of a loop in programming?",  
        options: ["To execute a block of code once", "To repeat a block of code multiple times", "To stop the execution of a program","To create new variables"],
        answer: 1
    },
    {
        question: " What symbol is used for single-line comments in Python?",
        options: [" //", "/* */", "<!-- -->", "#"],
        answer: 3
    },
    {
        question: " What is a variable in programming?",
        options: ["A fixed value that cannot change", "A name used to store data that can change", "A function that executes a task", "A syntax rule for defining code"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a valid variable name?",
        options: ["my_variable", "value_123", "userName", "1stValue"],
        answer: 3
    },
    {
        question: "In object-oriented programming, what is inheritance?",
        options: ["A class acquiring properties from another class", "A way to create a new variable", "A loop inside another loop", "A function calling itself"],
        answer: 0
    },
    {
        question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        answer: 1
    },
    {
        question: "What is the worst-case time complexity of the QuickSort algorithm?",
        options: [" O(n)", " O(n log n)", "O(n²)", "O(log n)"],
        answer: 2
    },
    {
        question: "What does PHP stand for?",
        options: ["Personal Home Page", "Private Hosting Protocol", "Hypertext Preprocessor","Predefined Hyperlink Processor"],
        answer: 2 
    },
   {
        question: "What is a constant in programming?",
        options: ["A variable that changes during execution", "A function that returns a value", "A fixed value that cannot be changed after its declaration", " A loop that runs forever"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;
let quizCompleted = false;

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    document.getElementById("options").innerHTML = "";
    
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        document.getElementById("options").appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizCompleted = true;
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.querySelector(".nav-buttons").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").textContent = `🎉 Your Score: ${score} / ${quizData.length}`;
}

function showAnswers() {
    if (quizCompleted) {
        document.getElementById("answers-container").style.display = "block";
        document.getElementById("answers-container").innerHTML = `<h3>✅ Correct Answers:</h3><ul>${quizData.map(q => `<li>${q.question} - <strong>${q.options[q.answer]}</strong></li>`).join('')}</ul>`;
    } else {
        alert("⚠️ Please complete the quiz to view the correct answers.");
    }
}

document.getElementById("show-answers").onclick = showAnswers;
document.getElementById("prev").onclick = () => { if (currentQuestionIndex > 0) { currentQuestionIndex--; loadQuestion(); } };
document.getElementById("skip").onclick = () => { currentQuestionIndex++; if (currentQuestionIndex < quizData.length) { loadQuestion(); } else { quizCompleted = true; showResult(); } };
document.getElementById("next").onclick = () => { currentQuestionIndex++; if (currentQuestionIndex < quizData.length) { loadQuestion(); } else { quizCompleted = true; showResult(); } };

loadQuestion();
