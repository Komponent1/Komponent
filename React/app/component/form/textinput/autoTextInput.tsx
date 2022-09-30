import React, { useState, useEffect } from 'react';
import { AutoControlFunction, useAutocomplete } from '../../autocomplete/useAutocomplete';
import TextInput, { TextInputProps } from './textinput';
import * as S from './style';

export type AutoTextInputProps = TextInputProps & {
  controlValue: string[] | AutoControlFunction;
};
function AutoTextInput({
  placeholder = '',
  id = undefined,
  type = 'text',
  disabled = false,
  scale = 'medium',
  control,
  controlValue,
  ...args
}: AutoTextInputProps) {
  const { onChange, values } = useAutocomplete({
    controlValue,
  });
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    onChange({ v: control.value });
  }, [control.value]);
  useEffect(() => {
    const closeOptionBox = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.srui-form-auto-text-input')) setOpen(false);
    };
    window.addEventListener('click', closeOptionBox);
    return () => window.removeEventListener('click', closeOptionBox);
  }, []);
  const onClick = (value: string) => {
    control.onChange({ v: value });
    onChange({ v: value });
  };
  const onFocus = () => {
    if (disabled) return;
    setOpen(true);
  };

  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (open && control.ref.current) {
      setWidth(control.ref.current.clientWidth);
    }
  }, [open]);

  return (
    <S.autoTextInput
      className="srui-form-auto-text-input"
    >
      <TextInput
        placeholder={placeholder}
        id={id}
        control={control}
        type={type}
        disabled={disabled}
        scale={scale}
        onFocus={onFocus}
        {...args}
      />
      <S.optionBox
        open={open}
        scale={scale}
        width={width}
      >
        {values.map((value) => (
          <S.option
            key={`selectoption_${value}`}
            onClick={() => onClick(value)}
            value={value}
            scale={scale}
          >
            {value}
          </S.option>
        ))}
      </S.optionBox>
    </S.autoTextInput>
  );
}

export default AutoTextInput;
