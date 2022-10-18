import React, { HTMLAttributes, ReactNode } from 'react';
import * as S from './style';

export type CardContentProps = HTMLAttributes<HTMLDivElement> & {
  /** 엘리먼트 */
  children: ReactNode;
  /** 카드 컨텐츠의 방향(세로/가로) */
  display?: S.CardContentDisplay;
};
function CardContent({
  children,
  display = 'column',
  ...args
}: CardContentProps) {
  return (
    <S.cardContent
      display={display}
      {...args}
    >
      {children}
    </S.cardContent>
  );
}
CardContent.defaultProps = {
  display: 'column',
};

export default CardContent;
