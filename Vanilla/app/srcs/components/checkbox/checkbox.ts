import { createElem } from "../../utils";
import './style.css';

function checkbox ({ init, setChecked }): HTMLDivElement {
  let checked = init;

  const box = createElem('div', 'checkbox') as HTMLDivElement;
  box.addEventListener('click', e => {
    e.stopPropagation();
    setChecked();
    checked = !checked;
    if (!checked) box.style.background = '#252553';
    else box.style.background = 'white';
  });

  return box;
};

export default checkbox