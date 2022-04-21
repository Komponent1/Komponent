import { createElem } from "..";
import hljs from 'highlight.js'
import './style.css'

const Editor = () => {
  const wrapper = createElem('div', 'code_editor');
  const input = createElem('textarea', 'input') as HTMLTextAreaElement;
  const pre = createElem('pre')
  const code = createElem('code')
  code.classList.add('language-javascript')
  pre.appendChild(code);
  wrapper.appendChild(input);
  wrapper.appendChild(pre);

  input.oninput = e => {
    const text = (e.target as HTMLTextAreaElement).value;
    const output = wrapper.querySelector('pre code');
    output.textContent = text;

    hljs.highlightElement(output);
  }
  return wrapper;
};

export default Editor;
