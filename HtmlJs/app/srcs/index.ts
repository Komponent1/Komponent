import './style.css'

import contextMenu from './contextMenu/contextMenu';
import { makeDiv } from './utils';

const app: HTMLElement|null = document.getElementById("root");
const ContextMenu = makeDiv("Context Menu" ,contextMenu(document.body, 5));

app.appendChild(ContextMenu);
