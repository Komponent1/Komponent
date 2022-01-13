import './style.css'

const app: HTMLElement|null = document.getElementById("root");
const elem = document.createTextNode("This is vanilla source");

app?.appendChild(elem)