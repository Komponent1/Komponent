import React, { HTMLAttributes, ReactNode, useState } from 'react';
import * as S from './style';

export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  /** 크기 값 */
  scale?: S.AvatarScale;
  /** 디자인 형태 */
  design?: S.AvatarDesign;
  /** 백그라운드 컬러, 텍스트는 현재 무조건 흰색입니다. */
  color?: string;
  /** image url */
  src?: string;
  /** image 실패, 로드시 대체 요소 */
  alt?: ReactNode | string;
  /** text나 아이콘을 입력시 요구, 이미지보다 우선순위가 낮습니다 */
  children?: ReactNode;
};
function Avatar({
  scale = 'medium',
  design = 'circle',
  color = 'primary',
  src = undefined,
  alt = undefined,
  children = undefined,
  ...args
}: AvatarProps) {
  const [error, setError] = useState<boolean>(true);
  return (
    <S.avatar
      scale={scale}
      design={design}
      color={color}
      {...args}
    >
      {alt && error ? alt : null}
      {src ? (
        <S.img
          error={error}
          src={src}
          onLoad={() => setError(false)}
          onError={() => setError(true)}
        />
      ) : null}
      {children && !src && !alt ? children : null}
    </S.avatar>
  );
}
Avatar.defaultProps = {
  scale: 'medium',
  design: 'circle',
  color: 'primary',
  src: undefined,
  alt: undefined,
  children: undefined,
};
export default Avatar;
