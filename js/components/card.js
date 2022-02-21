export const answerBlock = document.querySelectorAll(
  '[data-js="answer-block"]'
);

answerBlock?.forEach(x => {
  const answerText = x.querySelector('[data-js="answer-text"]');
  const answerButton = x.querySelector('[data-js="answer-button"]');

  answerButton.addEventListener('click', () => {
    answerText.classList.toggle('answer-text-hidden');
  });
});