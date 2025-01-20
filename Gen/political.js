// राजनीतिक सवालों की सूची (यहां 20 उदाहरण दिए गए हैं, आप इसे 200 तक बढ़ा सकते हैं)
const questions = [
    { question: "भारत का वर्तमान प्रधानमंत्री कौन हैं?", answer: "नरेन्द्र मोदी" },
    { question: "भारत में राष्ट्रपति चुनाव कौन आयोजित करता है?", answer: "भारत निर्वाचन आयोग" },
    { question: "भारत में लोकतंत्र की शुरुआत कब हुई?", answer: "1950 में" },
    { question: "किस वर्ष में भारतीय संविधान लागू हुआ?", answer: "26 जनवरी 1950" },
    { question: "भारत का सबसे पहला प्रधानमंत्री कौन थे?", answer: "पंडित जवाहरलाल नेहरू" },
    { question: "संविधान का प्रमुख शिल्पकार कौन थे?", answer: "डॉ. भीमराव अंबेडकर" },
    { question: "भारत में राज्यसभा का गठन कब हुआ?", answer: "1952" },
    { question: "भारत के पहले उपराष्ट्रपति कौन थे?", answer: "सर्वपल्ली राधाकृष्णन" },
    { question: "कौन से वर्ष में भारत ने अपना पहला आम चुनाव कराया?", answer: "1951-1952" },
    { question: "भारत में प्रधानमंत्री के पद का कार्यकाल कितना होता है?", answer: "5 वर्ष" },
    { question: "भारत में राष्ट्रपति का चुनाव कौन करता है?", answer: "लोकसभा और राज्यसभा के निर्वाचित सदस्य" },
    { question: "भारतीय संसद के कितने सदन होते हैं?", answer: "दो, लोकसभा और राज्यसभा" },
    { question: "भारत के किस प्रधानमंत्री ने 'गांधीजी' को राष्ट्रपिता के रूप में स्वीकार किया?", answer: "पंडित नेहरू" },
    { question: "भारत के पहले महिला प्रधानमंत्री कौन थीं?", answer: "इंदिरा गांधी" },
    { question: "भारत में 'राष्ट्रीय ध्वज' के रंग क्या होते हैं?", answer: "केसरिया, सफेद, हरा और नीला" },
    { question: "संविधान में 'धर्मनिरपेक्षता' शब्द कब जोड़ा गया?", answer: "42वें संशोधन में, 1976 में" },
    { question: "भारतीय संविधान में कुल कितने अनुच्छेद हैं?", answer: "448 अनुच्छेद" },
    { question: "किस भारतीय प्रधानमंत्री ने 'भारत को परमाणु शक्ति' घोषित किया?", answer: "अटल बिहारी वाजपेयी" },
    { question: "भारत में सबसे पहले महिला राष्ट्रपति कौन थीं?", answer: "प्रतिभा पाटिल" },
    { question: "भारतीय संसद के लोकसभा के सदस्य का कार्यकाल कितने वर्षों का होता है?", answer: "5 वर्ष" }
];

// पृष्ठ के आकार का चयन (यहां 10 प्रश्न प्रति पृष्ठ)
const questionsPerPage = 10;
let currentPage = 0;

// सवाल और उत्तर को पृष्ठ पर जोड़ने के लिए फ़ंक्शन
function displayQuestions() {
    const container = document.getElementById("questions-container");
    container.innerHTML = '';  // पहले से मौजूद सवालों को साफ करें

    const start = currentPage * questionsPerPage;
    const end = start + questionsPerPage;
    const questionsToDisplay = questions.slice(start, end);

    questionsToDisplay.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <h3 onclick="toggleAnswer('answer${start + index}')">${q.question}</h3>
            <div id="answer${start + index}" class="answer">${q.answer}</div>
        `;
        container.appendChild(questionDiv);
    });

    // नेविगेशन बटन को दिखाना/छिपाना
    document.getElementById("prevButton").style.display = currentPage > 0 ? 'inline-block' : 'none';
    document.getElementById("nextButton").style.display = end < questions.length ? 'inline-block' : 'none';
}

// उत्तर दिखाने और छिपाने का फ़ंक्शन
function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    answerElement.style.display = answerElement.style.display === "none" || answerElement.style.display === "" ? "block" : "none";
}

// पृष्ठ बदलने के लिए फ़ंक्शन
function changePage(direction) {
    currentPage += direction;
    displayQuestions();
}

// पृष्ठ को शुरू करने के लिए
displayQuestions();
