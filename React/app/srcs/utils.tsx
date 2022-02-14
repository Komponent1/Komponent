import React from 'react';
import * as style from './style';

export const Div: React.FC = ({ conf, children }) => (
  <div>
    <style.mainTitle>{conf.name}</style.mainTitle>
    <h2>Example</h2>
    <style.mainExample>
      {children}
    </style.mainExample>
    {conf.explain ? <div dangerouslySetInnerHTML={{ __html: conf.explain }} />: null}
  </div>
);
/* set returnType is type of listener  */
export function throttle (func: any, delay: number): (this: Window, ev: Event) => any {
  let thorttled = false;
  return (...arg: any[]): void => {
    if (!thorttled) {
      thorttled = true;
      setTimeout(() => {
        func(...arg);
        thorttled = false;
      }, delay)
    }
  } 
}
export function debounce (func: any,delay: number): (this: Window, ev: Event) => any {
  let timeoutId = null;
  return (...arg: any[]): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...arg), delay);
  }
}

export function timer (datas: Object) {
  return (resolve: any) => {
    setTimeout(() => resolve(datas), (Math.round(Math.random() * 5) + 1) * 250);
  }
}
type Obj = {
  data: any[]
}
export function fetcher(datas: any[]): Promise<Obj> {
  return new Promise(timer({ data: datas }));
}
export const DummyComp: React.FC = ({ color, width = '100%', height = '100%', children }) => (
  <div style={{ background: color, width: width, height: height }}>
    {children}
  </div>
)
const color = [ '#BF7950', '#8C634A', '#A6A6A6', '#B3D5F2'];
export const makeDummyComps = (width = '100%', height = '100%'): React.FC[] => {
  return (
    color.map((e, i) => <DummyComp key={i} color={e} widht={width} height={height}/>)
  );
}