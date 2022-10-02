import React, { useState, useCallback, useEffect } from 'react';
import * as S from './selectStyle';
import { FormControl } from '../useFormControl';

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
  /** select 스타일 */
  design?: S.SelectDesign;
};
function Select({
  id = undefined,
  width = undefined,
  disabled = false,
  scale = 'medium',
  label = undefined,
  design = 'normal',
  control,
}: SelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [transition, setTransition] = useState<number>(0.5);
  const toggleOptionBox = () => {
    if (disabled) return;

    if (!open) setOpen(true);
    else setTransition(0.5);
  };
  const transitionEnd = () => {
    if (open && transition === 0.5) setOpen(false);
  };
  useEffect(() => {
    const closeOptionBox = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.srui-form-select')) setOpen(false);
    };
    window.addEventListener('click', closeOptionBox);
    return () => window.removeEventListener('click', closeOptionBox);
  }, []);
  useEffect(() => {
    if (open) setTransition(1);
    else setTransition(0.5);
  }, [open]);

  const makeOption = useCallback(() => {
    if (!control.values || control.values?.length === 0) {
      return (
        <S.option scale={scale} value="">no data</S.option>
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
          scale={scale}
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
      scale={scale}
    >
      <S.select
        disabled={disabled}
        scale={scale}
        width={width}
        invalid={control.touched && control.invalid}
        open={open}
        design={design}
        onClick={toggleOptionBox}
      >
        {control.value
          ? labelPipe(control.value)
          : '선택하기'}
      </S.select>
      <S.optionBox
        onTransitionEnd={transitionEnd}
        transition={transition}
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
  design: 'normal',
};

export default Select;
