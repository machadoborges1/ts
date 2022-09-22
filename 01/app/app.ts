import { NegociacaoControle } from "./controllers/negociacao-controler.js";

const controller = new NegociacaoControle;
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
