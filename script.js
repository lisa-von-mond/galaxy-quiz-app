

let questionInput = document.querySelector("#galaxy-question");
let questionCounter = document.querySelector("#counter-1");


questionInput.addEventListener("input", () => {
    let Text = questionInput.value;
    let textLength = Text.length;
    questionCounter.innerHTML = textLength + ' / 500';
 });






