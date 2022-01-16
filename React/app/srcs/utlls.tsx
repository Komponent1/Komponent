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

const Div: React.FC = ({ title, children }) => (
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


export { Div };
