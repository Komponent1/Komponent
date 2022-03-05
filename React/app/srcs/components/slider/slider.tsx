import React, { useState, useRef, useEffect } from 'react';
import * as style from './style';

type Prop = {
  width?: number,
  init?: number,
  setValue: (val: number) => void|any
}
const useSlider = (init: number, func: (val: number) => void|any, width: number) => {
  const sliderRef = useRef<React.Ref>(null);
  const markRef = useRef<React.Ref>(null);
  const [ value, setValue ] = useState<number>(init);

  const drag = (e: React.MouseEvent) => {
    const point = e.clientX - sliderRef.current.offsetLeft;
    if (point > width || point < 0) {
      return;
    } else {
      func(point / width);
      setValue(point / width);
    }
  }

  useEffect(() => {
    if (!markRef) return;

    const markerfunc = () => {
      window.addEventListener('mousemove', drag);
    }
    const windowfunc = () => {
      window.removeEventListener('mousemove', drag);
    }
    markRef.current.addEventListener('mousedown', markerfunc);
    window.addEventListener('mouseup', windowfunc)
    return () => {
      window.removeEventListener('mouseup', windowfunc);
      markRef.current.removeEventListner('mousedown', markerfunc);
    }
  }, [ markRef ])

  return { value, sliderRef, markRef }
}

const Slider = ({ width = 100, setValue, init = 0 }: Prop) => {
  const { value, sliderRef, markRef } = useSlider(init, setValue, width);

  return (
    <style.div className='kui_slider' width={width} ref={sliderRef}>
      <style.up className='kui_slider_up' scale={value * 100}/>
      <style.down className='kui_slider_down' scale={(1 - value) * 100}/>
      <style.markder className='kui_slider_marker' ref={markRef}
        value={value * width}/>
    </style.div>
  )
};

export default Slider;
