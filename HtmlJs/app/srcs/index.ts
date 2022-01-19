import './style.css'

import contextMenu from './contextMenu/contextMenu';
import { makeDiv } from './utils';
import scrollSpy from './scrollSpy/scrollSpy';
import infiniteScroll from './infiniteScroll/infiniteScroll';

const app: HTMLElement|null = document.getElementById("root");
const ContextMenu = makeDiv("Context Menu", contextMenu(document.body, 5));
const ScrollSpy = makeDiv("ScrollSpy", scrollSpy(5));
const InfiniteScroll = makeDiv("Infinite Scroll", infiniteScroll())

app.appendChild(ContextMenu);
app.appendChild(ScrollSpy);
app.appendChild(InfiniteScroll);
