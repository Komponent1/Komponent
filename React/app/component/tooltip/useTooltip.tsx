import React, { RefObject } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { renderPortal } from '../lib';
import Tooltip from './tip';
import * as S from './style';

const getTop = (
  target: HTMLElement | null,
  position: S.TipPosition,
) => {
  if (target === null) return undefined;
  const Position = {
    top: 0,
    bottom: target.clientHeight,
    left: target.clientHeight / 2,
    right: target.clientHeight / 2,
  };
  return (
    window.scrollY + target.getBoundingClientRect().top
    + Position[position]
  );
};
const getLeft = (
  target: HTMLElement | null,
  position: 'left' | 'top' | 'right' | 'bottom',
) => {
  if (target === null) return undefined;
  const Position = {
    top: target.clientWidth / 2,
    bottom: target.clientWidth / 2,
    left: 0,
    right: target.clientWidth,
  };
  return (
    window.scrollX + target.getBoundingClientRect().left
    + Position[position]
  );
};

export const useTooltip = (
  tip: string,
  ref: RefObject<HTMLElement>,
  position: 'left' | 'top' | 'right' | 'bottom' = 'top',
) => {
  const rootId = 'srui-popup-root';

  const onDisappear = () => {
    const div = document.getElementById(rootId) as HTMLElement;
    unmountComponentAtNode(div);
  };

  const onAppear = () => {
    if (!ref.current) return;

    renderPortal(
      rootId,
      <Tooltip
        tip={tip}
        left={getLeft(ref.current, position)}
        top={getTop(ref.current, position)}
        position={position}
      />,
      {
        position: 'absolute',
        top: '0',
        left: '0',
      },
    );
  };

  return { onAppear, onDisappear };
};
