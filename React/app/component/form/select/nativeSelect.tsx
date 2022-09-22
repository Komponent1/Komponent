import React, {
  ChangeEvent, useCallback,
} from 'react';
import { FormControl } from '../useForm';
import * as S from './nativeSelectStyle';

export type NativeSelectProps = {
  /** useForm control */
  control: FormControl<any, HTMLSelectElement>;
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
function NativeSelect({
  id = 'srui-form-nativeselect',
  width = undefined,
  disabled = false,
  scale = 'medium',
  label = undefined,
  control,
}: NativeSelectProps) {
  const changeFunction = (e: ChangeEvent<HTMLSelectElement>) => {
    control.onChange({ e });
  };

  const makeOption = useCallback(() => {
    if (!control.values || control.values?.length === 0) {
      return (
        <option value="">no data</option>
      );
    }
    return (
      control.values?.map((value, i) => (
        <S.option
          key={`selectoption_${value}`}
          value={value}
        >
          {label ? label[i] : value}
        </S.option>
      ))
    );
  }, [control.values]);

  return (
    <S.div>
      <S.select
        className="srui-form-native-select"
        id={id}
        ref={control.ref}
        onChange={changeFunction}
        disabled={disabled}
        invalid={control.touched && control.invalid}
        width={width}
        scale={scale}
      >
        {makeOption()}
      </S.select>
    </S.div>
  );
}
NativeSelect.defaultProps = {
  id: 'srui-form-nativeselect',
  width: undefined,
  disabled: false,
  scale: 'medium',
  label: undefined,
};

export default NativeSelect;
