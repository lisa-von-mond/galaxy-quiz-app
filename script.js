let answerTextOne = document.querySelector('[data-js="answer-text-1"]');
let answerButtonOne = document.querySelector('[data-js="answer-button-1"]');

answerButtonOne.addEventListener("click", () => {
    answerTextOne.classList.toggle("answer-text-hidden");
});

let answerTextTwo = document.querySelector('[data-js="answer-text-2"]');
let answerButtonTwo = document.querySelector('[data-js="answer-button-2"]');

answerButtonTwo.addEventListener("click", () => {
    answerTextTwo.classList.toggle("answer-text-hidden");
});

let answerTextThree = document.querySelector('[data-js="answer-text-3"]');
let answerButtonThree = document.querySelector('[data-js="answer-button-3"]');

answerButtonThree.addEventListener("click", () => {
    answerTextThree.classList.toggle("answer-text-hidden");
});
