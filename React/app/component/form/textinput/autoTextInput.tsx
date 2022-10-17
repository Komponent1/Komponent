import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { AutoControlFunction, useAutocomplete } from '../../autocomplete/useAutocomplete';
import TextInput, { TextInputProps } from './textinput';
import * as S from './style';
import { getLeft, getTop } from '../../lib';

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
  const [open, setOpen] = useState<boolean>(false);
  const { onChange, values } = useAutocomplete({
    controlValue,
  });
  useEffect(() => {
    onChange({ v: control.value });
  }, [control.value]);
  useEffect(() => {
    const closeOptionBox = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.srui-form-auto-text-input')) {
        setOpen(false);
      }
    };
    window.addEventListener('click', closeOptionBox);
    return () => window.removeEventListener('click', closeOptionBox);
  }, []);

  const onClick = (value: string) => {
    control.onChange({ v: value });
    onChange({ v: value });
  };

  const makeOption = () => values.map((value) => (
    <S.option
      key={`autooption_${value}`}
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

  const onFocus = () => setOpen(true);

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
      {open ? openMenu() : null}
    </S.autoTextInput>
  );
}

export default AutoTextInput;
