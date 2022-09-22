import React, { ReactNode } from 'react';
import * as S from './style';

export type CardMediaProps = {
  /** 이미지 url */
  src: string;
  /** 이미지 내부에 위치할 엘리먼트 position: absolute로 고정할 것 */
  children?: ReactNode;
  /** 이미지 최대 길이 */
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
