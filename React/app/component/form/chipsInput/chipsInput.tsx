import React, {
  ChangeEventHandler, HTMLAttributes, KeyboardEventHandler, useState,
} from 'react';
import { Chip, Chips, useChips } from '../../chips';
import { ChipData } from '../../chips/useChips';
import { FormControl } from '../useFormControl';
import * as S from './style';

export type ChipsInputProps = HTMLAttributes<HTMLInputElement> & {
  /** FormControl 요소 */
  control: FormControl<string[], HTMLInputElement>,
  /** 내부 칩 크기요소 */
  scale?: S.ChipsInputScale;
  /** 현재 사용되지 않습니다. */
  disabled?: boolean;
  /** 디자인 스타일 */
  design?: S.ChipsInputDesign;
};
function ChipsInput({
  control,
  scale = 'medium',
  disabled = false,
  design = 'normal',
  ...args
}: ChipsInputProps) {
  const { chips, deleteChip, updateChip } = useChips(control.value);
  const [text, setText] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);
  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') e.preventDefault();
    if (e.key === 'Enter' && text !== '') {
      control.onChange({
        v: [...chips.map((chip) => chip.value), (e.target as HTMLInputElement).value],
      });
      updateChip((e.target as HTMLInputElement).value);
      setText('');
    }
    if (e.key === 'Backspace' && text === '' && chips.length !== 0) {
      deleteChip(chips[chips.length - 1]);
      control.onChange({
        v: chips.slice(0, -1).map((data) => data.value),
      });
    }
  };
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };
  const onDelete = (chip: ChipData) => {
    control.onChange({
      v: chips.filter((data) => data.id !== chip.id).map((data) => data.value),
    });
    deleteChip(chip);
  };
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  return (
    <S.chipsInput
      className="srui-chips-input"
      invalid={control.touched && control.invalid}
      disabled={disabled}
      scale={scale}
      design={design}
      focus={focus}
    >
      <Chip>.</Chip>
      <Chips chips={chips} onDelete={onDelete} />
      <S.input
        scale={scale}
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={text}
        ref={control.ref}
        onFocus={onFocus}
        onBlur={onBlur}
        {...args}
      />
    </S.chipsInput>
  );
}
ChipsInput.defaultProps = {
  scale: 'medium',
  disabled: false,
  design: 'normal',
};

export default ChipsInput;
