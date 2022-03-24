import { createElem } from '../../utils';
import './style.css';

type Config = {
  text: string,
  act: (e: MouseEvent, value: string) => void | any
}
type Prop = {
  title: string
  config: Config[]
  init?: boolean
}
function opendrawer ({ title, config, init = false }: Prop): HTMLDivElement {
  const wrapper = createElem('div', 'kui_opendrawer') as HTMLDivElement;
  const head = createElem('div', 'kui_opendrawer_head');
  const name = createElem('div', 'kui_opendrawer_name');
  name.innerText = title;
  const btn = createElem('div', 'kui_opendrawer_btn');
  btn.innerText = init ? '\u25b2' : '\u25bc';
  head.appendChild(name),
  head.appendChild(btn);
  wrapper.appendChild(head);
  const ul = createElem('ul', 'kui_opendrawer_ul');
  wrapper.appendChild(ul);
  ul.style.setProperty('--height', init ? '10rem' : '0');
  config.forEach(conf => {
    const li = createElem('li', 'kui_opendrawer_li');
    li.innerText = conf.text;
    li.addEventListener('click', (e: MouseEvent) => conf.act(e, conf.text));
    ul.appendChild(li);
  });

  head.addEventListener('click', () => {
    if (ul.style.getPropertyValue('--height') === '10rem') {
      ul.style.setProperty('--height', '0');
      btn.innerText = '\u25bc'
    } else {
      ul.style.setProperty('--height', '10rem');
      btn.innerText = '\u25b2'
    }
  })

  return wrapper;
};

export default opendrawer;
