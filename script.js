

let questionInput = document.querySelector("[js-data='textarea-q']");
let questionCounter = document.querySelector("[js-data='counter-q']");


questionInput?.addEventListener("input", () => {
    let Text1 = questionInput.value;
    let textLength1 = Text1.length;
    
    if (textLength1>99){
        questionCounter.textContent = 'MAX';
        questionCounter.classList.add("attention");

    } else {
        questionCounter.textContent = textLength1 + ' / 100';
        questionCounter.classList.remove("attention");
    };

 });


let answerInput = document.querySelector("[js-data='textarea-a']");
let answerCounter = document.querySelector("[js-data='counter-a']");


answerInput?.addEventListener("input", () => {
    let Text2 = answerInput.value;
    let textLength2 = Text2.length;
    
    if (textLength2>99){
        answerCounter.textContent = 'MAX';
        answerCounter.classList.add("attention");

    } else {
        answerCounter.textContent = textLength2 + ' / 100';
        answerCounter.classList.remove("attention");
    };

 });








