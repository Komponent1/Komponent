import './style.css';
import { createElem } from '../../utils';

type Prop = {
  prev?: string[],
  fetcher?: (text: string) => Promise<any|void>
}
function chipsui ({ prev = [], fetcher = async () => {}}: Prop): HTMLElement {
  const wrapper = createElem('div', 'kui_chips');
  const chips_wrapper = createElem('div', 'kui_chips_wrapper');
  const input = createElem('input', 'kui_chips_input');
  input.setAttribute('placeholder', 'add tag')
  wrapper.appendChild(chips_wrapper);
  wrapper.appendChild(input);

  const chiptexts = [];

  const makeChip = (text: string) => {
    const chip = createElem('div', 'kui_chips_chip');
    chip.innerHTML = `<span>${text}</span>`;
    const del = createElem('div', 'kui_chips_del');
    del.innerText = '\u2715';
    chip.appendChild(del);
    chiptexts.push(text);
    del.addEventListener('click', e => {
      const idx = chiptexts.findIndex(txt => txt === text);
      const before = (e.target as Node).parentElement.cloneNode(true);
      chips_wrapper.removeChild((e.target as Node).parentElement);
      chiptexts.splice(idx, 1);
      fetcher(text).catch(err => {
        alert(err);
        chips_wrapper.insertBefore(before, chips_wrapper.children[idx]);
        chiptexts.splice(idx, 0, text);
      })
    });

    chips_wrapper.appendChild(chip);
    
    return chip;
  }
  prev.forEach(text => makeChip(text));

  input.addEventListener('keyup', (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    if (chiptexts.some(text => text === (e.target as HTMLInputElement).value)) {
      alert('Is already tags');
      return;
    }

    const chip = makeChip((e.target as HTMLInputElement).value);
    fetcher((e.target as HTMLInputElement).value).catch(err => {
      alert(err);
      chips_wrapper.removeChild(chip);
      chiptexts.pop();
    });
    (e.target as HTMLInputElement).value = '';
  });


  return wrapper;
};

export default chipsui;