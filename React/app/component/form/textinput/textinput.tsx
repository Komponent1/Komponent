import React from 'react';
import * as S from './style';
import { FormControl } from '../useForm';

export type TextInputProps = {
  /** input 값 변수(state) */
  control: FormControl<string, HTMLInputElement>,
  /** text-input 타입 */
  type?: 'password' | 'email' | 'text';
  /** 변경 가능여부 */
  disabled?: boolean;
  /** 플레이스 홀더 */
  placeholder?: string;
  /** element id(라벨과 동일하게 설정) */
  id?: string;
  /** input 크기 */
  scale?: S.TextInputScale;
};
function TextInput({
  placeholder = '',
  id = 'srui-form-textinput',
  type = 'text',
  disabled = false,
  scale = 'medium',
  control,
}: TextInputProps) {
  const changeFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    control.onChange(e);
  };

  return (
    <S.Input
      className="srui-form-text-input"
      id={id}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={control.value}
      onChange={changeFunction}
      scale={scale}
      invalid={control.touched && control.invalid}
      ref={control.ref}
    />
  );
}
TextInput.defaultProps = {
  placeholder: '',
  type: 'text',
  id: 'srui-form-textinput',
  scale: 'medium',
  disabled: false,
};

export default TextInput;
