
export let questionInput = document.querySelector("[js-data='textarea-q']");
export let questionCounter = document.querySelector("[js-data='counter-q']");


questionInput?.addEventListener("input", () => {
    let Text1 = questionInput.value;
    let textLength1 = Text1.length;
    
    if (textLength1>199){
        questionCounter.textContent = 'MAX';
        questionCounter.classList.add("attention");

    } else {
        questionCounter.textContent = textLength1 + ' / 200';
        questionCounter.classList.remove("attention");
    };

 });


export let answerInput = document.querySelector("[js-data='textarea-a']");
export let answerCounter = document.querySelector("[js-data='counter-a']");


answerInput?.addEventListener("input", () => {
    let Text2 = answerInput.value;
    let textLength2 = Text2.length;
    
    if (textLength2>199){
        answerCounter.textContent = 'MAX';
        answerCounter.classList.add("attention");

    } else {
        answerCounter.textContent = textLength2 + ' / 200';
        answerCounter.classList.remove("attention");
    };

 });








