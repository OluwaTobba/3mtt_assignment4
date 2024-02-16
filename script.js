const quizData = [
    {
        question: "What is the capital of Nigeria?",
        options: ["Ekiti", "Lagos", "Abuja", "Lokoja"],
        correctAnswer: "Abuja"
    },
    {
        question: "What does JavaScript provide to handle asynchronous operations?",
        options: ["Promises", "Callbacks", "Asynchronous Functions", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "How can you comment out a section of code in HTML?",
        options: ["<!-- This is a comment -->", "// This is a comment //", " /* This is a comment */", "// This is a comment"],
        correctAnswer: "<!-- This is a comment -->"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "Hyper Transfer Markup Language", "Hypertext Markup Language", "High-Level Text Language"],
        correctAnswer: "Hypertext Markup Language"
    },
    {
        question: "In CSS, which property is used to change the text color of an element?",
        options: ["text-style", "color", "font-color", "text-color"],
        correctAnswer: "color"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        correctAnswer: "<a>"
    },
    {
        question: "What is the default display property for a <div> element in CSS?",
        options: ["Block", "Inline", "Flex", "Grid"],
        correctAnswer: "Block"
    },
    {
        question: "What does the acronym DOM stand for in the context of web development?",
        options: ["Data Object Module", "Document Object Module", "Date of Matriculation", "Display Oriented Model"],
        correctAnswer: "Document Object Module"
    },
    {
        question: "Which CSS property is used to set the spacing between lines of text?",
        options: ["Line spacing", "Spacing", "Line-height", "Text-spacing"],
        correctAnswer: "Line-height"
    },
    {
        question: "Which method is used to add a new element at the end of an array in JavaScript?",
        options: ["appendElement()", "push()", "addToEnd()", "insertAtEnd()"],
        correctAnswer: "push()"
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    
    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    nextButton.classList.add("hide");
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correctAnswer) {
        score++;
    }

    optionsContainer.classList.add("hide");
    nextButton.classList.remove("hide");
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
        optionsContainer.classList.remove("hide");
        nextButton.classList.add("hide");
    } else {
        endQuiz();
    }

    scoreDisplay.innerText = `Score: ${score}`;
}

function endQuiz() {
    questionContainer.innerText = "Quiz completed!";
    optionsContainer.innerHTML = "";
    nextButton.classList.add("hide");

    // Display final result and message
    const resultMessage = document.createElement("p");
    resultMessage.innerText = `Your final score is: ${score} out of ${quizData.length}`;
    resultMessage.classList.add("result-message");
    questionContainer.appendChild(resultMessage);

    const performanceMessage = document.createElement("p");
    if (score === quizData.length) {
        performanceMessage.innerText = "Congratulations! You got all the questions right!😌🎉";
    } else if (score >= Math.floor(quizData.length / 2)) {
        performanceMessage.innerText = "Well done! You performed quite well.😏";
    } else {
        performanceMessage.innerText = "Why are you so dull? 😒.";
    }
    performanceMessage.classList.add("performance-message");
    questionContainer.appendChild(performanceMessage);

    scoreDisplay.classList.remove("hide");
}

startQuiz();