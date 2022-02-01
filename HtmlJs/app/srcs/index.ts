import './style.css'

import contextMenu from './contextMenu/contextMenu';
import { makeDiv } from './utils';
import scrollSpy from './scrollSpy/scrollSpy';
import infiniteScroll from './infiniteScroll/infiniteScroll';
import tab from './Tab/tab';
import carousel, { makeDummyElem } from './carousel/carousel';
import buttonCarousel from './buttonCarousel/buttonCarousel';
import autocomplete from './autocomplete/autocomplete';
import liContextMenu, { dummies } from './liContextMenu/liContextMenu';

const app: HTMLElement|null = document.getElementById("root");
const ContextMenu = makeDiv("Context Menu", contextMenu(document.body, 5));
const ScrollSpy = makeDiv("ScrollSpy", scrollSpy(5));
const InfiniteScroll = makeDiv("Infinite Scroll", infiniteScroll())
const Tab = makeDiv("Tab", tab());
const Carousel = makeDiv("Carousel", carousel(makeDummyElem()));
const ButtonCarousel = makeDiv("Btn Carousel", buttonCarousel(makeDummyElem()));
const Autocomplete = makeDiv('Auto Complete', autocomplete());
const LiContextMenu = makeDiv('li Context Menu', liContextMenu(dummies));

app.appendChild(LiContextMenu);
app.appendChild(Autocomplete);
app.appendChild(ButtonCarousel);
app.appendChild(Carousel);
app.appendChild(ContextMenu);
app.appendChild(ScrollSpy);
app.appendChild(InfiniteScroll);
app.appendChild(Tab);


