import React, { useState, useCallback, useEffect } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import * as S from './selectStyle';
import { FormControl } from '../useFormControl';
import { renderPortal, getTop, getLeft } from '../../lib';

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

  const closeMenu = () => {
    const div = document.getElementById('srui-menu-popup-root') as HTMLElement;
    unmountComponentAtNode(div);
  };
  useEffect(() => {
    const closeOptionBox = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.srui-form-select')) {
        setOpen(false);
        closeMenu();
      }
    };
    window.addEventListener('click', closeOptionBox);
    return () => window.removeEventListener('click', closeOptionBox);
  }, []);

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
  const openBox = useCallback(() => {
    renderPortal(
      'srui-menu-popup-root',
      <S.optionBox
        top={getTop(control.ref.current)}
        left={getLeft(control.ref.current)}
        scale={scale}
        width={width}
      >
        {makeOption()}
      </S.optionBox>,
      {
        position: 'absolute',
        top: '0',
        left: '0',
      },
    );
  }, [control.ref.current, open]);
  const labelPipe = (value: any) => {
    if (!label || !control.values) return value;
    return label[control.values.findIndex((e) => e === value)];
  };
  const toggleOptionBox = () => {
    if (disabled) return;

    if (!open) {
      setOpen(true);
      openBox();
    } else {
      setOpen(false);
      closeMenu();
    }
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
