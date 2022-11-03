import React, { ChangeEvent, HTMLAttributes } from 'react';
import { FormControl } from '../useFormControl';
import * as S from './style';

export type AreaInputProps = HTMLAttributes<HTMLTextAreaElement> & {
  control: FormControl<string, HTMLTextAreaElement>,
  id?: string;
  placeholder?: string;
  width?: number | string;
  rows?: number;
  design?: S.SelectDesign;
  scale?: S.FormScalesType;
};
function AreaInput({
  id = undefined,
  placeholder = '',
  width = '100%',
  design = 'normal',
  rows = 5,
  scale = 'medium',
  control,
  ...args
}: AreaInputProps) {
  const changeFunction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    control.onChange({ e });
  };

  return (
    <S.textarea
      autoComplete="off"
      className="srui-form-area-input"
      id={id}
      value={control.value}
      onChange={changeFunction}
      ref={control.ref}
      placeholder={placeholder}
      rows={rows}
      width={width}
      design={design}
      scale={scale}
      {...args}
    />
  );
}
AreaInput.defaultProps = {
  id: undefined,
  placeholder: '',
  rows: 5,
  width: '100%',
  design: 'normal',
  scale: 'medium',
};

export default AreaInput;
