import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import Alert, { AlertProps } from './alert';
import { AlertScale, AlertType } from './style';

export type AlertPosition = 'lt' | 'lb' | 'rt' | 'rb';
export const useAlert = (
  position: AlertPosition = 'rb',
  time: number = 5000,
) => {
  let stack: AlertProps[] = [];

  const removeAlert = (id: number) => {
    const div = document.getElementById(`srui-alert-root_${position}`);
    if (!div) return;

    stack = stack.filter((config) => config.id !== id);
    ReactDOM.render(
      <>
        {stack.map((config) => (
          <Alert {...config} key={config.id} />
        ))}
      </>,
      div,
    );

    if (div.children.length === 0) {
      unmountComponentAtNode(div);
    }
  };

  const alert = (
    comment: string,
    alertOption?: {
      type?: AlertType,
      scale?: AlertScale,
    },
  ) => {
    let div = document.getElementById(`srui-alert-root_${position}`);
    if (div === null) {
      div = document.createElement('div');
      div.id = `srui-alert-root_${position}`;
      div.style.position = 'fixed';
      if (position.match('l')) {
        div.style.left = '0';
        div.style.alignItems = 'flex-start';
      } else if (position.match('r')) {
        div.style.right = '0';
        div.style.alignItems = 'flex-end';
      }
      if (position.match('t')) {
        div.style.top = '0';
      } else if (position.match('b')) {
        div.style.bottom = '0';
      }
      div.style.display = 'flex';
      div.style.flexDirection = 'column';
      document.body.appendChild(div);
    }
    const { type, scale } = (alertOption || { type: 'danger', scale: 'medium' });
    const newAlert = {
      comment,
      type,
      scale,
      id: stack.length === 0 ? 0 : stack[stack.length - 1].id + 1,
    };
    stack = [...stack, newAlert];

    ReactDOM.render(
      <>
        {stack.map((config) => (
          <Alert {...config} key={config.id} />
        ))}
      </>,
      div,
    );

    setTimeout(() => {
      removeAlert(newAlert.id);
    }, time);
  };

  return {
    alert,
  };
};
