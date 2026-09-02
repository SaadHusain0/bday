/* ==================================
   FLOATING HEART BACKGROUND
================================== */

const heartBackground =
    document.getElementById(
        "heartBackground"
    );

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );

        const hearts = [
            "♡",
            "❤︎⁠",
            "˚ʚ♡ɞ˚",
            "♥︎",
            "❤️",
            "💗",
            "💖",
            "💕",
            "💘",
            "❤️"
        ];

    heart.className =
        "floating-heart";

    heart.textContent =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        15 +
        Math.random() * 28 +
        "px";

    heart.style.animationDuration =
        7 +
        Math.random() * 6 +
        "s";

    heartBackground.appendChild(
        heart
    );

    setTimeout(
        () => heart.remove(),
        14000
    );
}

setInterval(
    createHeart,
    700
);


/* =====================
   MUSIC
===================== */

const music =
    document.getElementById(
        "bgMusic"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );


musicButton.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.play()
                .then(
                    () => {
                        musicButton.textContent =
                            "🔊";
                    }
                )
                .catch(
                    () => {}
                );

        } else {

            music.pause();

            musicButton.textContent =
                "🎵";

        }

    }
);



/* =====================
   PAGE SWITCHING
===================== */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(
            ".page"
        );


    pages.forEach(
        page => {

            page.classList.remove(
                "active"
            );

        }
    );


    document
        .getElementById(pageId)
        .classList.add(
            "active"
        );


    window.scrollTo(
        0,
        0
    );

}



/* =====================
   START
===================== */

function startSurprise() {

    music.play()
        .then(() => {

            musicButton.textContent =
                "🔊";

        })
        .catch(() => {});

    showPage(
        "envelopePage"
    );

}



/* =====================
   ENVELOPE
===================== */

let envelopeOpened = false;


function openEnvelope() {

    if (envelopeOpened) {
        return;
    }


    const envelope =
        document.getElementById(
            "envelopeWrapper"
        );


    const hint =
        document.getElementById(
            "envelopeHint"
        );


    const continueButton =
        document.getElementById(
            "letterContinueButton"
        );


    envelope.classList.add(
        "open"
    );


    hint.textContent =
        "Take your time and read the letter";


    /*
       IMPORTANT:
       NO automatic page timer here.
       The letter stays open forever.
    */

    setTimeout(
        () => {

            continueButton.classList.add(
                "show"
            );

        },
        1000
    );


    envelopeOpened = true;

}


/* ==================================
   PHOTO SLIDESHOW
================================== */

const slides =
    document.querySelectorAll(
        ".slide"
    );

const dotsContainer =
    document.getElementById(
        "dots"
    );

let currentSlide = 0;


function createDots() {

    slides.forEach(
        (_, index) => {

            const dot =
                document.createElement(
                    "div"
                );

            dot.className =
                "dot";

            if (index === 0) {

                dot.classList.add(
                    "active-dot"
                );

            }

            dotsContainer.appendChild(
                dot
            );

        }
    );

}

createDots();


function updateSlides() {

    slides.forEach(
        (slide, index) => {

            slide.classList.toggle(
                "active-slide",
                index === currentSlide
            );

        }
    );

    const dots =
        document.querySelectorAll(
            ".dot"
        );

    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active-dot",
                index === currentSlide
            );

        }
    );

}


function nextSlide() {

    currentSlide =
        (currentSlide + 1) %
        slides.length;

    updateSlides();

}


function previousSlide() {

    currentSlide =
        (
            currentSlide - 1 +
            slides.length
        ) %
        slides.length;

    updateSlides();

}



/* =====================
   NO BUTTON
===================== */

const noButton =
    document.getElementById(
        "noButton"
    );

const reactionBox =
    document.getElementById(
        "reactionBox"
    );


const reactions = [

    "Zarnain NO dabaya?",

    "Sach me?",

    "Dil tod diya mera",

    "Abe YES nahi daba paa ri ho kya",

    "Chup chaap YES dabao nahi bataye"

];

const memes = [
    "assets/meme1.jpg",
    "assets/meme2.jpg",
    "assets/meme3.jpg",
    "assets/meme4.jpg",
    "assets/meme5.jpg",
    "assets/meme6.jpg",
    "assets/meme7.jpg",
    
]


function moveNoButton() {

    const randomReaction =
        reactions[
            Math.floor(
                Math.random() *
                reactions.length
            )
        ];


    reactionBox.textContent =
        randomReaction;

        const randomMeme = 
            memes[
                Math.floor(
                    Math.random() *
            memes.length
                )
            ];

         const memeImage = 
            document.getElementById("randomMeme");
            memeImage.src = randomMeme;
            memeImage.classList.add("show")
            ;

    const buttonWidth = 100;

    const buttonHeight = 60;


    const maxX =
        window.innerWidth -
        buttonWidth;


    const maxY =
        window.innerHeight -
        buttonHeight;


    const randomX =
        Math.random() *
        maxX;


    const randomY =
        Math.random() *
        maxY;


    noButton.style.position =
        "fixed";


    noButton.style.left =
        randomX + "px";


    noButton.style.top =
        randomY + "px";


    noButton.style.zIndex =
        "2000";

}


noButton.addEventListener(
    "pointerenter",
    moveNoButton
);


noButton.addEventListener(
    "touchstart",
    event => {

        event.preventDefault();

        moveNoButton();

    }
);


noButton.addEventListener(
    "click",
    moveNoButton
);



/* =====================
   YES BUTTON
===================== */

function yesClicked() {

    const yesResult =
        document.getElementById(
            "yesResult"
        );


    yesResult.classList.add(
        "show"
    );
    document.getElementById("randomMeme")
        .classList.remove("show");



    noButton.style.display =
        "none";


    reactionBox.textContent =
        "Achievement unlocked.";

}


/* ==================================
   CONFETTI
================================== */

function createConfetti(amount) {

    const confetti =
        document.getElementById(
            "confetti"
        );

    const symbols = [
        "🎉",
        "✨",
        "💗",
        "🎊",
        "🎂"
    ];

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );

        piece.className =
            "confetti-piece";

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.left =
            Math.random() *
            100 +
            "vw";

        piece.style.animationDuration =
            2 +
            Math.random() * 3 +
            "s";

        confetti.appendChild(
            piece
        );

        setTimeout(
            () => piece.remove(),
            6000
        );

    }

}




/* =====================
   RESTART
===================== */

function restartWebsite() {

    envelopeOpened = false;


    document
        .getElementById(
            "envelopeWrapper"
        )
        .classList.remove(
            "open"
        );


    document
        .getElementById(
            "letterContinueButton"
        )
        .classList.remove(
            "show"
        );


    document
        .getElementById(
            "yesResult"
        )
        .classList.remove(
            "show"
        );


    noButton.style.display =
        "inline-block";


    noButton.style.position =
        "";


    noButton.style.left =
        "";


    noButton.style.top =
        "";


    reactionBox.textContent =
        "I am watching your answer...";


    showPage(
        "introPage"
    );

}
