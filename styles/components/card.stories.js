export default {
    title: "components/card",
};


export const Default = () =>
`<div class="card first">
<div class="question-text">
    <h2>What is your favourite planet?</h2>
    <p>For over 1000 years, Jedis and space bees have fightened for freedom in all galaxies in our universe. Name your favourite planet of this beautiful cosmos!</p>
</div>
<div class="show-answer-button">
    <button>show answer</button>
</div>
<div class="tags">
    <div class="tag">ONE</div>
    <div class="tag">TWO</div>
    <div class="tag">THREE</div>
    <div class="tag">FOUR</div>
    <div class="tag">FIVE</div>
    <div class="tag">SIX</div>
    <div class="tag">SEVEN</div>
</div>
</div>
`;

import DefaultHtml from "./card1.html";

export const Card1 = () => DefaultHtml;


