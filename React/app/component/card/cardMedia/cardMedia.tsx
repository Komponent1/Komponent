import React, { ReactNode, useState } from 'react';
import { Skeleton } from '../../loading';
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
  maxHeight = 120,
}: CardMediaProps) {
  const [load, setLoad] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);

  return (
    <S.div>
      <S.img
        src={src}
        maxHeight={maxHeight}
        load={load}
        err={err}
        onError={() => setErr(true)}
        onLoad={() => setLoad(true)}
      />
      {!load ? (
        <Skeleton
          width="100%"
          height={maxHeight}
        />
      ) : null}
      {children}
    </S.div>
  );
}
CardMedia.defaultProps = {
  children: undefined,
  maxHeight: 120,
};

export default CardMedia;
