import './style.css'

import contextMenu from './contextMenu/contextMenu';

const app: HTMLElement|null = document.getElementById("root");
const elem = contextMenu(document.body, 5);

app.appendChild(elem);
