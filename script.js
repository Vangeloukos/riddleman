let currentRiddle = 0;

const riddles = [
    {
        question: "What does Paul need?",
        answer: "time"
    },
    {
        question: "Over countless ages, I have risen tall,\nThrough the ebb and flow, I've stood through all.\nI’m shaped by time, though I never age,\nA giant’s throne on nature’s stage.\nWhat am I?",
        answer: "mountain"
    },
    {
        question: "I mark the path where two roads meet,\nI’m a sign that’s both solemn and sweet.\nSeen in places both sacred and true,\nWhat am I that holds such view?",
        answer: "cross"
    }
];

function checkAnswer() {
    const answerInput = document.getElementById("answerInput").value.trim().toLowerCase();
    if (answerInput === riddles[currentRiddle].answer) {
        currentRiddle++;
        if (currentRiddle < riddles.length) {
            displayNextRiddle();
        } else {
            displayFinalMessage();
        }
    } else {
        alert("Incorrect answer. Try again.");
    }
}

function displayNextRiddle() {
    document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
    document.getElementById("answerInput").value = "";
}

function displayFinalMessage() {
    document.getElementById("riddle-section").classList.add("hidden");
    document.getElementById("final-message").classList.remove("hidden");
}
