import React, { ChangeEvent, HTMLAttributes } from 'react';
import { FormControl } from '../useFormControl';
import * as S from './style';

export type AreaInputProps = HTMLAttributes<HTMLTextAreaElement> & {
  /** textarea 값 변수(state) */
  control: FormControl<string, HTMLTextAreaElement>,
  /** element id(라벨과 동일하게 설정), 아이디는 모든 폼요소가 다르게 설정되어야 합니다. */
  id?: string;
  /** 플레이스 홀더 */
  placeholder?: string;
  /** 에어리어 너비 */
  width?: number | string;
  /** 에어리어 높이(텍스트 줄수) */
  rows?: number;
  /** 디자인 요소 */
  design?: S.SelectDesign;
  /** 폰트 크기 및 패딩 값 조작 */
  scale?: S.FormScalesType;
  /** input 변경 가능 / 불가능 */
  disabled?: boolean;
};
function AreaInput({
  id = undefined,
  placeholder = '',
  width = '100%',
  design = 'normal',
  rows = 5,
  scale = 'medium',
  disabled = false,
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
      disabled={disabled}
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
  disabled: false,
};

export default AreaInput;
