import React, {
  useState, useEffect, KeyboardEventHandler, ChangeEventHandler,
} from 'react';
import ReactDOM from 'react-dom';
import { AutoControlFunction, useAutocomplete } from '../../autocomplete/useAutocomplete';
import { ChipsInputProps } from './chipsInput';
import { Chip, Chips, useChips } from '../../chips';
import { ChipData } from '../../chips/useChips';
import { getLeft, getTop } from '../../lib';
import * as S from './style';

export type AutoChipsInputProps = ChipsInputProps & {
  controlValue: AutoControlFunction | string[];
};
function AutoChipsInput({
  scale = 'medium',
  disabled = false,
  design = 'normal',
  control,
  controlValue,
  ...args
}: AutoChipsInputProps) {
  const { chips, deleteChip, updateChip } = useChips(control.value);
  const { onChange, values } = useAutocomplete({
    controlValue,
  });
  const [text, setText] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    const closeOptionBox = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.srui-form-auto-chips-input')) setOpen(false);
    };
    window.addEventListener('click', closeOptionBox);
    return () => window.removeEventListener('click', closeOptionBox);
  }, []);
  useEffect(() => {
    onChange({ v: text });
  }, [text]);
  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
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
    }
  };
  const onDelete = (chip: ChipData) => {
    control.onChange({
      v: chips.filter((data) => data.id !== chip.id).map((data) => data.value),
    });
    deleteChip(chip);
  };
  const textChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };
  const onClick = (value: string) => {
    control.onChange({
      v: [...chips.map((chip) => chip.value), value],
    });
    updateChip(value);
    setText('');
  };
  const onFocus = () => {
    if (disabled) return;
    setOpen(true);
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  const makeOption = () => values.map((value) => (
    <S.option
      key={`selectoption_${value}`}
      onClick={() => onClick(value)}
      value={value}
      scale={scale}
    >
      {value}
    </S.option>
  ));
  const openMenu = () => {
    const rootId = 'srui-menu-popup-root';
    const style = { position: 'absolute', top: '0', left: '0' };
    let container = document.getElementById(rootId);
    if (!container) {
      container = document.createElement('div');
      container.id = rootId;
      if (style) {
        (container as HTMLElement).style.cssText = Object.entries(style).map(([key, value]) => `${key}: ${value}`).join(';');
      }
      document.body.appendChild(container);
    }

    return ReactDOM.createPortal(
      <S.optionBox
        scale={scale}
        width={control.ref.current?.clientWidth}
        left={getLeft(control.ref.current)}
        top={getTop(control.ref.current)}
      >
        {makeOption()}
      </S.optionBox>,
      container,
    );
  };
  return (
    <S.autoChipsInput
      className="srui-form-auto-chips-input"
    >
      <S.chipsInput
        className="srui-chips-input"
        invalid={control.touched && control.invalid}
        disabled={disabled}
        scale={scale}
        design={design}
        focus={focus}
        ref={control.ref}
      >
        <Chip>.</Chip>
        <Chips chips={chips} onDelete={onDelete} />
        <S.input
          scale={scale}
          onKeyDown={onKeyDown}
          onChange={textChange}
          value={text}
          ref={control.ref}
          onFocus={onFocus}
          onBlur={onBlur}
          {...args}
        />
      </S.chipsInput>
      {open ? openMenu() : null}
    </S.autoChipsInput>
  );
}

export default AutoChipsInput;
