// प्रश्नों की सूची (यहाँ पर 30 प्रश्न हैं, आप इसे और बढ़ा सकते हैं)
const questions = [
    { question: "भारत की राजधानी क्या है?", answer: "नई दिल्ली" },
    { question: "विश्व का सबसे बड़ा महासागर कौन सा है?", answer: "पैसिफिक महासागर" },
    { question: "ताजमहल किसने बनवाया था?", answer: "मुग़ल सम्राट शाहजहाँ ने" },
    { question: "भारत के पहले राष्ट्रपति कौन थे?", answer: "डॉ. राजेन्द्र प्रसाद" },
    { question: "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई थी?", answer: "1885" },
    { question: "भारत के पहले प्रधानमंत्री कौन थे?", answer: "पंडित नेहरू" },
    { question: "भारत में सबसे लंबी नदी कौन सी है?", answer: "गंगा" },
    { question: "विश्व का सबसे ऊँचा पर्वत कौन सा है?", answer: "एवरेस्ट" },
    { question: "भारतीय राष्ट्रीय ध्वज में कितने रंग होते हैं?", answer: "3 रंग" },
    { question: "भारत की स्वतंत्रता कब प्राप्त हुई थी?", answer: "15 अगस्त 1947" },
    { question: "भारत का सबसे बड़ा राज्य कौन सा है?", answer: "राजस्थान" },
    { question: "कौन सा जानवर 'राजा' कहलाता है?", answer: "शेर" },
    { question: "भारत में कौन सा खेल सबसे लोकप्रिय है?", answer: "क्रिकेट" },
    { question: "पृथ्वी का आकार क्या है?", answer: "गोला" },
    { question: "भारत की सबसे बड़ी झील कौन सी है?", answer: "वुलर झील" },
    { question: "विक्रम साराभाई का संबंध किस क्षेत्र से है?", answer: "अंतरिक्ष" },
    { question: "भारत का सबसे छोटा राज्य कौन सा है?", answer: "गोवा" },
    { question: "भारत में कितने राज्य हैं?", answer: "28 राज्य" },
    { question: "कौन सा ग्रह पृथ्वी से निकटतम है?", answer: "शुक्र" },
    { question: "भारत में सबसे बड़ा रेलवे स्टेशन कौन सा है?", answer: "हावड़ा स्टेशन" },
    { question: "भारत में कौन सा पर्वत श्रृंखला है?", answer: "हिमालय" },
    { question: "हमारे शरीर में कितनी हड्डियाँ होती हैं?", answer: "206 हड्डियाँ" },
    { question: "मंगल ग्रह को क्या कहा जाता है?", answer: "लाल ग्रह" },
    { question: "विश्व का सबसे बड़ा देश कौन सा है?", answer: "रूस" },
    { question: "सतलुज नदी किस नदी प्रणाली का हिस्सा है?", answer: "इंडस नदी प्रणाली" },
    { question: "किसे 'आधुनिक भारत का निर्माता' कहा जाता है?", answer: "स्वामी विवेकानंद" },
    { question: "भारत में पहला कंप्यूटर कब आया था?", answer: "1955" },
    { question: "कौन सा पर्वत 'श्वेत पर्वत' के नाम से जाना जाता है?", answer: "कंचनजंगा" },
    { question: "पृथ्वी के किस हिस्से को 'जलमंडल' कहा जाता है?", answer: "समुद्र और महासागर" },
    { question: "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?", answer: "सहारा" },
    { question: "हिमाचल प्रदेश की राजधानी क्या है?", answer: "शिमला" }
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
