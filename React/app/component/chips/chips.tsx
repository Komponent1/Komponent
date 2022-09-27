import React from 'react';
import { Chip } from '.';
import * as S from './style';
import { ChipData } from './useChips';

export type ChipsProps = {
  /** useChips의 chip 데이터 */
  chips: ChipData[];
  /** chip 크기 */
  scale?: S.ChipScale;
  /** useChips의 deleteChip */
  onDelete?: (target: ChipData) => void;
  /** chip 색깔 */
  color?: S.ChipColor;
};
function Chips({
  chips,
  scale = 'medium',
  onDelete = undefined,
  color = 'grey',
}: ChipsProps) {
  const deleteChip = (chip: ChipData) => {
    if (onDelete) onDelete(chip);
  };

  return (
    <S.chips className="srui-chips">
      {chips.map(((chip) => (
        <Chip
          key={`srui-${chip.id}`}
          scale={scale}
          onDelete={
            onDelete
              ? () => deleteChip(chip)
              : undefined
          }
          color={color}
        >
          {chip.value}
        </Chip>
      )))}
    </S.chips>
  );
}
Chips.defaultProps = {
  scale: 'medium',
  onDelete: undefined,
  color: 'grey',
};

export default Chips;
