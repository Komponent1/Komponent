/* eslint-disable no-param-reassign */
import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { renderPortal } from '../lib';
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
    const { type, scale } = (alertOption || { type: 'danger', scale: 'medium' });
    const newAlert = {
      comment,
      type,
      scale,
      id: stack.length === 0 ? 0 : stack[stack.length - 1].id + 1,
    };
    stack = [...stack, newAlert];

    const positioning = () => {
      const style: { [key: string]: string } = {};
      if (position.match('l')) {
        style.left = '0';
        style['align-items'] = 'flex-start';
      } else if (position.match('r')) {
        style.right = '0';
        style['align-items'] = 'flex-end';
      }
      if (position.match('t')) {
        style.top = '0';
      } else if (position.match('b')) {
        style.bottom = '0';
      }
      return style;
    };

    renderPortal(
      `srui-alert-root_${position}`,
      <>
        {stack.map((config) => (
          <Alert {...config} key={config.id} />
        ))}
      </>,
      {
        display: 'flex',
        'flex-direction': 'column',
        position: 'fixed',
        ...positioning(),
      },
    );

    setTimeout(() => {
      removeAlert(newAlert.id);
    }, time);
  };

  return {
    alert,
  };
};
