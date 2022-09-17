import React, { ReactNode } from 'react';
import * as S from './style';

export type CardMediaProps = {
  src: string;
  children?: ReactNode;
  maxHeight?: string | number;
};
function CardMedia({
  src,
  children = undefined,
  maxHeight = 240,
}: CardMediaProps) {
  return (
    <S.div>
      <S.img src={src} maxHeight={maxHeight} />
      {children}
    </S.div>
  );
}
CardMedia.defaultProps = {
  children: undefined,
  maxHeight: 240,
};

export default CardMedia;
