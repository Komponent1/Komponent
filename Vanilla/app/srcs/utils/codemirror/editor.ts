import { createElem } from "..";
import hljs from 'highlight.js'
import './style.css'

const Editor = (lang) => {
  const wrapper = createElem('div', 'code_editor');
  const input = createElem('textarea', 'input') as HTMLTextAreaElement;
  input.classList.add('setting');
  const pre = createElem('pre')
  pre.classList.add('setting');
  const code = createElem('code');
  code.classList.add('setting', `language-${lang}`);
  pre.appendChild(code);
  wrapper.appendChild(input);
  wrapper.appendChild(pre);
  /* highlighting code text */
  input.oninput = e => {
    const text = (e.target as HTMLTextAreaElement).value;
    const output = wrapper.querySelector('pre code');
    output.textContent = text;

    hljs.highlightElement(output);
  }
  /* Tab 입력 */
  input.onkeydown = e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const output = wrapper.querySelector('pre code');
      const [ before, after ] = [
        output.textContent.slice(0, input.selectionStart),
        output.textContent.slice(input.selectionEnd)
      ];
      output.textContent = before + '  ' + after;
      input.value = before + '  ' + after;
      input.selectionStart = before.length + 2;
      input.selectionEnd = before.length + 2;
    }
  }

  return wrapper;
};

export default Editor;
