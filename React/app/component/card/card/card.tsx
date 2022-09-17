import React, { ReactNode } from 'react';
import * as S from './style';

export type CardProps = {
  children?: ReactNode;
  design?: S.CardDesign;
  width?: S.CardWidth;
  maxWidth?: S.CardWidth;
  minWidth?: S.CardWidth;
  action?: Function;
};
function Card({
  children = '',
  design = 'border',
  width = '100%',
  maxWidth = undefined,
  minWidth = undefined,
  action = undefined,
}: CardProps) {
  const onAction = () => {
    if (action) action();
  };

  return (
    <S.card
      design={design}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      isAction={action !== undefined}
      onClick={onAction}
    >
      {children}
    </S.card>
  );
}
Card.defaultProps = {
  children: '',
  design: 'border',
  width: '100%',
  maxWidth: undefined,
  minWidth: undefined,
  action: undefined,
};
export default Card;
