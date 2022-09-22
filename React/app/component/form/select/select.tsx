import React, { useState, useCallback, useEffect } from 'react';
import * as S from './selectStyle';
import { FormControl } from '../useForm';

export type SelectProps = {
  /** useForm control */
  control: FormControl<any, HTMLDivElement>;
  /** element id(라벨과 동일하게 설정) */
  id?: string;
  /** 너비 값 */
  width?: S.SelectWidthType;
  /** 변경 가능여부 */
  disabled?: boolean;
  /** 크기 */
  scale?: S.FormScalesType;
  /** select 라벨 */
  label?: string[];
};
function Select({
  id = undefined,
  width = undefined,
  disabled = false,
  scale = 'medium',
  label = undefined,
  control,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const optionBoxOpen = () => {
    if (!disabled) setOpen(true);
  };
  useEffect(() => {
    const closeOptionBox = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.srui-form-select')) setOpen(false);
    };
    window.addEventListener('click', closeOptionBox);
    return () => window.removeEventListener('click', closeOptionBox);
  }, []);

  const makeOption = useCallback(() => {
    if (!control.values || control.values?.length === 0) {
      return (
        <S.option value="">no data</S.option>
      );
    }
    const onClick = (value: any) => {
      control.onChange({ v: value });
      setOpen(false);
    };

    return (
      control.values?.map((value, i) => (
        <S.option
          key={`selectoption_${value}`}
          onClick={() => onClick(value)}
          value={value}
        >
          {label ? label[i] : value}
        </S.option>
      ))
    );
  }, [control.values]);

  const labelPipe = (value: any) => {
    if (!label || !control.values) return value;
    return label[control.values.findIndex((e) => e === value)];
  };

  return (
    <S.div
      className="srui-form-select"
      id={id}
      ref={control.ref}
    >
      <S.select
        disabled={disabled}
        scale={scale}
        width={width}
        invalid={control.touched && control.invalid}
        open={open}
        onClick={optionBoxOpen}
      >
        {control.value
          ? labelPipe(control.value)
          : '선택하기'}
      </S.select>
      <S.optionBox
        scale={scale}
        open={open}
        width={width}
      >
        {makeOption()}
      </S.optionBox>
    </S.div>
  );
}
Select.defaultProps = {
  id: undefined,
  width: undefined,
  disabled: false,
  scale: 'medium',
  label: undefined,
};

export default Select;
