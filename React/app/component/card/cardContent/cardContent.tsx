import React, { ReactNode } from 'react';
import * as S from './style';

export type CardContentProps = {
  children: ReactNode;
  display?: S.CardContentDisplay;
};
function CardContent({
  children,
  display = 'column',
}: CardContentProps) {
  return (
    <S.cardContent
      display={display}
    >
      {children}
    </S.cardContent>
  );
}
CardContent.defaultProps = {
  display: 'column',
};

export default CardContent;
