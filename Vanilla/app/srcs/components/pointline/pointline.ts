import './style.css';
import { createElem } from '../../utils';
import cvsUtil from '../../canvas';

function pointline({ width, height, num, text }) {
  const wrapper = createElem('div', 'kui_pointline');
  const dom = createElem('canvas', 'kui_pointline_canvas') as HTMLCanvasElement;
  dom.width = width;
  dom.height = height;
  wrapper.appendChild(dom);
  const canvas = cvsUtil(dom);
  const long = width - 80;

  canvas.drawLine([[20, height / 2], [long + 20, height / 2]], { linewidth: 5, strokestyle: 'orange' });
  for(let i = 0; i < num; i++) {
    canvas.drawLine([
      [20 + ((long / (num - 1)) * i), height / 2],
      [20 + ((long / (num - 1)) * i) + 20, (height / 2) + (i % 2 === 0 ? 1 : -1) * (height / 8)]],
      { strokestyle: 'orange', linewidth: 5 })
    canvas.drawStrokeCircle([20 + ((long / (num - 1)) * i), height / 2], 8, { strokestyle: 'orange', fillstyle: 'white', linewidth: 5 });
    canvas.drawText(`TEXT_${i}`, [20 + ((long / (num - 1)) * i) + 20, (height / 2) + (i % 2 === 0 ? 1 : -1) * (height / 6)])
  }

  return wrapper;
};

export default pointline;
