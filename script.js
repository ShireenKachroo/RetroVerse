let visitorCount = 0; //cnt visitors to pg

function updateVisitorCount() { //increase visitor cnt
    visitorCount++;
    document.getElementById('counter').innerHTML = `Visitors: ${visitorCount}`;
}
window.onload = updateVisitorCount;

//quiz game
function startQuiz() {
    const questions = [
        { question: "Who is known as the King of Bollywood?", options: ["Amitabh Bachchan", "Shah Rukh Khan", "Salman Khan"], correctAnswer: "Shah Rukh Khan" },
        { question: "Which game was famously played on Nokia phones?", options: ["Snake", "Tetris", "Pac-Man"], correctAnswer: "Snake" },
        { question: "Which TV show featured the iconic character 'Mowgli'?", options: ["Jungle Book", "Tarzan", "Mowgli Adventures"], correctAnswer: "Jungle Book" }
    ];
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const userAnswer = prompt(`${randomQuestion.question}\nOptions: ${randomQuestion.options.join(", ")}`);
    if (userAnswer === randomQuestion.correctAnswer) {
        alert("Correct! Well done, retro master!");
    } else {
        alert(`Oops! The correct answer was ${randomQuestion.correctAnswer}. Try again!`);
    }
}

//spinning wheel game
function spinWheel() {
    const options = ["🎶 Listen to Retro Music", "🎥 Watch a Retro Movie", "🕹️ Play Retro Games"];
    const randomOption = options[Math.floor(Math.random() * options.length)];
    alert(`Wheel Spinning... You got: ${randomOption}`);
}
function showNostalgiaImages() {
    //display images
    var imagesContainer = document.getElementById("nostalgia-images");
    imagesContainer.style.display = "block";

    //hide button
    var button = document.getElementById("nostalgia-button");
    button.style.display = "none";
}

//mood Guessing
function guessMood() {
    const moods = ["Happy", "Excited", "Chill", "Surprised"];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    const userMood = prompt("Guess my mood! Choose one: Happy, Excited, Chill, Surprised");
    if (userMood === randomMood) {
        alert(`Wow! You guessed it right! I'm feeling ${randomMood}.`);
    } else {
        alert(`Oops! I'm actually feeling ${randomMood}. Better luck next time!`);
    }
}

//fortune telling
function tellFortune() {
    const fortunes = [
        "🌟 Your future is bright and full of retro vibes!",
        "🌟 You will discover a new retro game soon!",
        "🌟 A nostalgic memory will come back to you today!",
        "🌟 A surprise awaits you in the retro world!"
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    alert(`Your fortune: ${randomFortune}`);
}


//fan club poll
function vote(category) {
    const messages = {
        Music: "You’re a true retro music lover! 🎵 Bollywood hits, retro beats, and classic tracks!",
        Movies: "Lights, Camera, Retro Action! 🎬 Classic Bollywood movies and epic blockbusters!",
        Games: "Game on! You’re a retro gamer at heart! 🎮 Reliving the golden age of video games!"
    };
    if (messages[category]) { //if category exists
        document.getElementById('club-messages').innerHTML = `<p>${messages[category]}</p>`;
    } else {
        document.getElementById('club-messages').innerHTML = "<p>Oops! Something went wrong. Please try again!</p>";
    }
}


//fan club form
function submitForm() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    if (name && email) {
        alert(`Welcome, ${name}! You've joined the Retro Fan Club! 🎉`);
        document.getElementById('nameInput').value = '';
        document.getElementById('emailInput').value = '';
    } else {
        alert("Please fill in all details to join the club!");
    }
}

//guestbook
function addComment() {
    const comment = document.getElementById('guestbook').value;
    if (comment) {
        const commentBox = document.getElementById('comments');
        const newComment = document.createElement('p');
        newComment.textContent = comment;
        commentBox.appendChild(newComment);
        document.getElementById('guestbook').value = '';
    } else {
        alert("Please enter a comment before submitting!");
    }
}

