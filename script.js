

let questionInput = document.querySelector("#galaxy-question");
let questionCounter = document.querySelector("#counter-1");


questionInput.addEventListener("input", () => {
    let Text = questionInput.value;
    let textLength = Text.length;
    
    if (textLength>99){
        questionCounter.textContent = 'MAX';
        questionCounter.classList.add("attention");

    } else {
        questionCounter.textContent = textLength + ' / 500';
        questionCounter.classList.remove("attention");
    };

 });






