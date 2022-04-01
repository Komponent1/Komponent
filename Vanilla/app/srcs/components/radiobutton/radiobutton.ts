import './style.css';
import { createElem } from '../../utils';

type Prop = {
  labels: string[],
  setValue: (value: string, i?: number) => void|any
  init?: number
  layout?: 'row'|'column'
}
function radiobutton ({ labels, setValue, init = -1, layout = 'row' }: Prop) {
  const wrapper = createElem('div', 'kui_radiobutton');
  wrapper.style.flexDirection = layout;
  const buttons: HTMLElement[] = [];

  let select = init;

  for (let i = 0; i < labels.length; i++) {
    const btnset = createElem('div', 'kui_radiobutton_btnset');
    const button = createElem('div', 'kui_radiobutton_button');
    const round = createElem('div', 'kui_radiobutton_round');
    const background = createElem('div', 'kui_radiobutton_background');
    const icon = createElem('div', 'kui_radiobutton_icon');
    button.appendChild(background);
    button.appendChild(round);
    button.appendChild(icon);

    const label = createElem('div', 'kui_radiobutton_label');
    label.innerText = labels[i];

    btnset.appendChild(button);
    btnset.appendChild(label);
    wrapper.appendChild(btnset);
    buttons.push(btnset);
  }
  
  buttons.forEach((button, i) => {
    button.addEventListener('mouseup', e => {
      for (let j = 0; j < buttons.length; j++) {
        if (j === i) continue;
        buttons[j].children[0].classList.remove('select');
      }
      select = i;
      setValue(labels[i], i);
      button.children[0].classList.add('select');
    })
  })

  return wrapper;
};

export default radiobutton;
