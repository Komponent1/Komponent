import React, { HTMLAttributes, ReactNode } from 'react';
import * as S from './style';

export type GridProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  columns?: number;
  breakPoint?: number[];
  gap?: number;
};
function Grid({
  children = undefined,
  columns = 4,
  breakPoint = [],
  gap = 10,
  ...args
}: GridProps) {
  return (
    <S.grid
      columns={columns}
      breakPoint={breakPoint}
      gap={gap}
      {...args}
    >
      {children}
    </S.grid>
  );
}
Grid.defaultProps = {
  children: undefined,
  columns: 4,
  breakPoint: [],
  gap: 10,
};

export default Grid;
