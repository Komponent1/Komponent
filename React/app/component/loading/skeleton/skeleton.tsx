import React, { HTMLAttributes } from 'react';
import * as S from './style';

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  /** 스켈레톤 표시 타입 */
  type?: S.SekeletonType;
  /** 너비 값 */
  width?: number | string;
  /** 높이 값 */
  height?: number | string;
};
function Skeleton({
  type = 'box',
  width = '100%',
  height = '100%',
  ...args
}: SkeletonProps) {
  if (type === 'avatar') {
    return (
      <S.skeletonAvatar
        width={width}
        height={height}
        {...args}
      />
    );
  }
  if (type === 'text') {
    return (
      <S.skeletonText
        width={width}
        height={height}
        {...args}
      />
    );
  }
  return (
    <S.skeletonBox
      width={width}
      height={height}
      {...args}
    />
  );
}
Skeleton.defaultProps = {
  type: 'box',
  width: '100%',
  height: '100%',
};

export default Skeleton;
