import React, { HTMLAttributes, ReactNode, useRef } from 'react';
import { useTooltip } from './useTooltip';
import * as S from './style';

export type TooltipProps = HTMLAttributes<HTMLDivElement> & {
  tip: string;
  children: ReactNode;
  position?: S.TipPosition;
};
function Tooltip({
  tip,
  children,
  position = 'top',
  ...args
}: TooltipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { onAppear, onDisappear } = useTooltip(tip, ref, position);

  return (
    <S.tooltip
      onMouseEnter={onAppear}
      onMouseLeave={onDisappear}
      ref={ref}
      {...args}
    >
      {children}
    </S.tooltip>
  );
}
Tooltip.defaultProps = {
  position: 'top',
};

export default Tooltip;
