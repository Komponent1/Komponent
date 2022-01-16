import './style.css'

import contextMenu from './contextMenu/contextMenu';
import { makeDiv } from './utils';
import scrollSpy from './scrollSpy/scrollSpy';

const app: HTMLElement|null = document.getElementById("root");
const ContextMenu = makeDiv("Context Menu", contextMenu(document.body, 5));
const ScrollSpy = makeDiv("ScrollSpy", scrollSpy(5));

app.appendChild(ContextMenu);
app.appendChild(ScrollSpy);