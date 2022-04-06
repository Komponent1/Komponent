import router from "./router";
import { createElem } from "./utils";

const header = document.getElementById('header');
const title = createElem('h1', 'title');
title.innerText = 'Komponent';
title.addEventListener('click', e => {
  router('/vanilla');
});

header.appendChild(title);
