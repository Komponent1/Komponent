import React, { HTMLAttributes, ReactNode } from 'react';
import theme from '../../styles/theme';
import * as S from './style';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** <CardConent>, <CardMedia>, <CardHeader> 혹은 기타 엘리먼트 */
  children?: ReactNode;
  /** 카드의 레이아웃 디자인 */
  design?: S.CardDesign;
  /** 카드 너비 값 */
  width?: S.CardWidth;
  /** 카드 최대 너비(flex 디자인의 경우) */
  maxWidth?: S.CardWidth;
  /** 카드 최소 너비(flex 디자인의 경우) */
  minWidth?: S.CardWidth;
  /** 카드 클릭시 진행될 액션 */
  action?: Function;
  /** border 색깔 */
  color?: string;
  /** border 두께 */
  borderWidth?: number;
};
function Card({
  children = '',
  design = 'border',
  width = '100%',
  maxWidth = undefined,
  minWidth = undefined,
  action = undefined,
  color = theme.color.white500,
  borderWidth = 1,
  ...args
}: CardProps) {
  const onAction = () => {
    if (action) action();
  };

  return (
    <S.card
      design={design}
      width={width}
      color={color}
      borderWidth={borderWidth}
      maxWidth={maxWidth}
      minWidth={minWidth}
      isAction={action !== undefined}
      onClick={onAction}
      {...args}
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
  color: theme.color.white500,
  borderWidth: 1,
};
export default Card;
