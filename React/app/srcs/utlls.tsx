import React from 'react';
import styled from 'styled-components'

const style = {
  Div: styled.div`
    
  `,
  Title: styled.h1`
    margin: 0;
    padding: 0;
  `
};

export const Div: React.FC = ({ title, children }) => (
  <style.Div>
    <style.Title>{title}</style.Title>
    {children}
  </style.Div>
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
export const DummyComp: React.FC = ({ color, width = '100%', height = '100%' }) => (
  <div style={{ background: color, width: width, height: height }} />
)
const color = ['yellow', 'blue', 'red', 'green'];
export const makeDummyComps = (): React.FC[] => {
  return (
    color.map((e, i) => <DummyComp key={i} color={e} />)
  );
}