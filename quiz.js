// Define the 20 quiz questions and their correct answers
const questions = [
    { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi" },
    { question: "Who is the current President of India?", options: ["Ram Nath Kovind", "Droupadi Murmu", "Pranab Mukherjee", "APJ Abdul Kalam"], answer: "Droupadi Murmu" },
    { question: "Which is the largest country by area?", options: ["Russia", "Canada", "China", "USA"], answer: "Russia" },
    { question: "What is the national flower of India?", options: ["Rose", "Lotus", "Tulip", "Jasmine"], answer: "Lotus" },
    { question: "Which is the smallest country in the world?", options: ["Vatican City", "Monaco", "Nauru", "San Marino"], answer: "Vatican City" },
    { question: "Who wrote the national anthem of India?", options: ["Rabindranath Tagore", "Subramania Bharati", "Vallabhbhai Patel", "Bhagat Singh"], answer: "Rabindranath Tagore" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: "Yen" },
    { question: "Which country is known as the land of the rising sun?", options: ["China", "Japan", "India", "South Korea"], answer: "Japan" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "H2", "CO2"], answer: "H2O" },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"], answer: "Albert Einstein" },
    { question: "Which is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "Who is known as the father of the nation in India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Bhagat Singh", "Subhash Chandra Bose"], answer: "Mahatma Gandhi" },
    { question: "In which year did India gain independence?", options: ["1947", "1950", "1935", "1962"], answer: "1947" },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Ganga", "Yangtze"], answer: "Nile" },
    { question: "Which is the largest continent by population?", options: ["Africa", "Asia", "Europe", "North America"], answer: "Asia" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
    { question: "What is the main ingredient in guacamole?", options: ["Avocado", "Tomato", "Onion", "Cucumber"], answer: "Avocado" },
    { question: "Who invented the light bulb?", options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "James Watt"], answer: "Thomas Edison" },
    { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kanchenjunga", "Mount Kilimanjaro"], answer: "Mount Everest" },
    { question: "Which animal is known as the king of the jungle?", options: ["Lion", "Tiger", "Elephant", "Bear"], answer: "Lion" },
    { question: "What is the most widely spoken language in the world?", options: ["English", "Mandarin", "Hindi", "Spanish"], answer: "Mandarin" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci" }
];

// Variables to keep track of quiz state
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = questions.length;

// DOM elements
const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-button');
const answerContainer = document.getElementById('answer');

// Load the current question
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionHTML = `
        <div class="question">
            <p>${currentQuestionIndex + 1}. ${question.question}</p>
        </div>
        <div class="options">
            ${question.options.map((option, index) => `
                <label>
                    <input type="radio" name="question${currentQuestionIndex}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        </div>
    `;
    quizContainer.innerHTML = questionHTML;
    answerContainer.classList.add('hidden'); // Hide answer initially
    nextButton.classList.add('hidden'); // Hide next button initially
}

// Show the answer after selection
function showAnswer() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        const selectedAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (selectedAnswer === correctAnswer) {
            answerContainer.innerHTML = `Correct! The answer is: ${correctAnswer}`;
            answerContainer.classList.remove('wrong');
            answerContainer.classList.add('answer');
            score++;
        } else {
            answerContainer.innerHTML = `Wrong! The correct answer is: ${correctAnswer}`;
            answerContainer.classList.remove('answer');
            answerContainer.classList.add('wrong');
        }
        answerContainer.classList.remove('hidden');
        nextButton.classList.remove('hidden');
    } else {
        alert("Please select an answer!");
    }
}

// Load the first question
loadQuestion();

// Handle Next Button Click
nextButton.addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion(); // Load next question
        nextButton.classList.add('hidden');
        answerContainer.classList.add('hidden');
    } else {
        alert("Quiz Completed! Your score is: " + score + " out of " + totalQuestions);
        nextButton.innerHTML = "Restart Quiz";
        nextButton.addEventListener('click', () => location.reload()); // Restart the quiz
    }
});

// Handle the first answer submission
quizContainer.addEventListener('change', showAnswer);
