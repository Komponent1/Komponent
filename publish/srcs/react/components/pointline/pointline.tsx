import React, { useEffect } from 'react';
import { useCanvas } from '../../hooks';

type Prop = {
  width: number
  height: number
  num: number
}
const Pointline: React.FC = ({ width = 500, height = 500, num }: Prop) => {
  const { ref, cvs } = useCanvas({});

  useEffect(() => {
    const long = width - 80;

    cvs.drawLine([[20, height / 2], [long + 20, height / 2]], { linewidth: 5, strokestyle: 'orange' });
    for(let i = 0; i < num; i++) {
      cvs.drawLine([
        [20 + ((long / (num - 1)) * i), height / 2],
        [20 + ((long / (num - 1)) * i) + 20, (height / 2) + (i % 2 === 0 ? 1 : -1) * (height / 8)]],
        { strokestyle: 'orange', linewidth: 5 })
      cvs.drawStrokeCircle([20 + ((long / (num - 1)) * i), height / 2], 8, { strokestyle: 'orange', fillstyle: 'white', linewidth: 5 });
      cvs.drawText(`TEXT_${i}`, [20 + ((long / (num - 1)) * i) + 20, (height / 2) + (i % 2 === 0 ? 1 : -1) * (height / 6)])
    }
  } ,[])

  return (
    <canvas width={width} height={height} ref={ref}/>
  )
};

export default Pointline;
