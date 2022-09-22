import React from 'react';
import * as S from './style';

export type CardHeaderProps = {
  /** 카드 이름(필수) */
  title: string;
  /** 카드 부연 */
  subtitle?: string;
};
function CardHeader({
  title,
  subtitle = undefined,
}: CardHeaderProps) {
  return (
    <S.header>
      <S.title>{title}</S.title>
      <S.subtitle>{subtitle}</S.subtitle>
    </S.header>
  );
}
CardHeader.defaultProps = {
  subtitle: undefined,
};

export default CardHeader;
