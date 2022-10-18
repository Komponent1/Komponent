import React, { HTMLAttributes, ReactNode, useMemo } from 'react';
import { XCircleFill } from 'react-bootstrap-icons';
import * as S from './style';
import theme from '../styles/theme';

const buttonColor = {
  grey: theme.color.black400,
  primary: 'white',
  semantic: 'white',
  danger: 'white',
};
export type ChipProps = HTMLAttributes<HTMLDivElement> & {
  /** child element */
  children: ReactNode;
  /** chip 크기 옵션 */
  scale?: S.ChipScale;
  /** 삭제 옵션(비사용 권장) */
  onDelete?: () => void;
  /** chip 테마 섹 */
  color?: S.ChipColor;
};
function Chip({
  children,
  scale = 'medium',
  onDelete = undefined,
  color = 'grey',
  ...args
}: ChipProps) {
  const isDelete = useMemo(() => onDelete !== undefined, [onDelete]);

  return (
    <S.chip
      className="srui-chip"
      scale={scale}
      isDelete={isDelete}
      color={color}
      {...args}
    >
      <S.text
        isDelete={isDelete}
      >
        {children}
      </S.text>
      {onDelete
        ? (
          <XCircleFill color={buttonColor[color]} onClick={onDelete} />
        )
        : null}
    </S.chip>
  );
}
Chip.defaultProps = {
  scale: 'medium',
  onDelete: undefined,
  color: 'grey',
};

export default Chip;
