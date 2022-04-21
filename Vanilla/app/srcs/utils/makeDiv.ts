import { createElem } from ".";

function makeDiv(name: string, explain: string, elem: HTMLElement | HTMLDivElement) {
  const div = document.createElement("div")
  div.classList.add("content_box");

  const title = createElem("h1", 'title');
  title.innerText = name;

  const example = createElem('div', 'example');
  example.appendChild(elem);

  const sub = createElem('div', 'explain');
  sub.innerHTML = explain;
  
  div.appendChild(title);
  div.insertAdjacentHTML("beforeend", "<h2>Example</h2>");
  div.appendChild(example);
  div.appendChild(sub);

  return div
};

export default makeDiv;
