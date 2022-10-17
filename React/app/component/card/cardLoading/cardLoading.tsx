import React from 'react';
import Card from '../card/card';
import CardContent from '../cardContent/cardContent';
import CardHeader from '../cardHeader/cardHeader';
import CardMedia from '../cardMedia/cardMedia';
import { Skeleton } from '../../loading';
import * as S from '../card/style';

type LoadingCardProps = {
  content?: string[];
  /** 카드의 레이아웃 디자인 */
  design?: S.CardDesign;
  /** 카드 너비 값 */
  width?: S.CardWidth;
  /** 카드 최대 너비(flex 디자인의 경우) */
  maxWidth?: S.CardWidth;
  /** 카드 최소 너비(flex 디자인의 경우) */
  minWidth?: S.CardWidth;
  imgHeight?: number | string;
};
function CardLoading({
  content = ['header', 'media', 'content'],
  design = 'border',
  width = '100%',
  maxWidth = undefined,
  minWidth = undefined,
  imgHeight = 120,
}: LoadingCardProps) {
  return (
    <Card design={design} width={width} maxWidth={maxWidth} minWidth={minWidth}>
      {content.map((con) => {
        switch (con) {
          case 'header':
            return <CardHeader title="" loading />;
          case 'media':
            return <CardMedia maxHeight={imgHeight} src="" />;
          case 'content':
            return (
              <CardContent>
                <Skeleton type="text" width="90%" height="20px" />
                <Skeleton type="text" width="30%" height="20px" style={{ marginTop: '5px' }} />
              </CardContent>
            );
          default:
            return null;
        }
      })}
    </Card>
  );
}
CardLoading.defaultProps = {
  content: ['header', 'media', 'content'],
  design: 'border',
  width: '100%',
  maxWidth: undefined,
  minWidth: undefined,
  imgHeight: 120,
};

export default CardLoading;
