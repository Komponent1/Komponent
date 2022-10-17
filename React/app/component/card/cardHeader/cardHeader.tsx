import React from 'react';
import * as S from './style';
import { Skeleton } from '../../loading';

export type CardHeaderProps = {
  /** 카드 이름(필수) */
  title: string;
  /** 카드 부연 */
  subtitle?: string;
  /** loading 여부, 우선순위 loading > title */
  loading?: boolean;
};
function CardHeader({
  title,
  subtitle = undefined,
  loading = false,
}: CardHeaderProps) {
  return (
    <S.header>
      {loading
        ? <Skeleton type="text" width="70%" height="24px" />
        : (
          <>
            <S.title>{title}</S.title>
            <S.subtitle>{subtitle}</S.subtitle>
          </>
        )}
    </S.header>
  );
}
CardHeader.defaultProps = {
  subtitle: undefined,
  loading: false,
};

export default CardHeader;
