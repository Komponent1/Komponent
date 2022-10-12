import React, {
  HTMLAttributes, useEffect, useRef, useState,
} from 'react';
import * as S from './style';

export type TipProps = HTMLAttributes<HTMLDivElement> & {
  tip: string;
  left?: number;
  top?: number;
  position?: S.TipPosition;
  scale?: S.TipScale;
};
function Tip({
  tip,
  left = undefined,
  top = undefined,
  position = undefined,
  scale = 'medium',
  ...args
}: TipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pY, setPY] = useState<number | undefined>(undefined);
  const [pX, setPX] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (!ref.current) return;
    if (!left || !top) return;
    switch (position) {
      case 'top':
        setPY(
          (top || 0) - (ref.current as HTMLDivElement).clientHeight
          - S.Scale[scale].border,
        );
        setPX((left || 0) - (ref.current as HTMLDivElement).clientWidth / 2);
        break;
      case 'bottom':
        setPY((top || 0) + S.Scale[scale].border);
        setPX((left || 0) - (ref.current as HTMLDivElement).clientWidth / 2);
        break;
      case 'right':
        setPY((top || 0) - (ref.current as HTMLDivElement).clientHeight / 2);
        setPX((left || 0) + S.Scale[scale].border);
        break;
      default:
        setPY((top || 0) - (ref.current as HTMLDivElement).clientHeight / 2);
        setPX(
          (left || 0) - (ref.current as HTMLDivElement).clientWidth
          - S.Scale[scale].border,
        );
    }
  }, [position]);

  return (
    <S.tip
      left={pX || 0}
      top={pY || 0}
      opacity={(!!pX && !!pY) || !(!!left || !!top)}
      position={position}
      scale={scale}
      ref={ref}
      {...args}
    >
      {tip}
    </S.tip>
  );
}
Tip.defaultProps = {
  left: undefined,
  top: undefined,
  position: undefined,
  scale: 'medium',
};

export default Tip;
