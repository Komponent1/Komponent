import {
  useState, useRef, RefObject, useEffect, ChangeEvent, Dispatch, SetStateAction,
} from 'react';

type ValidateFunction<Type> = (value?: Type) => boolean;
type UseFormParams<Type> = {
  validator?: ValidateFunction<Type>,
  initValue?: Type,
  valueSet?: Type[],
};
export type FormControl<Type, H extends HTMLElement> = {
  value: Type | undefined;
  setValue: Dispatch<SetStateAction<Type | undefined>>;
  values: Type[] | undefined;
  setValues: Dispatch<SetStateAction<Type[] | undefined>>;
  onChange: ({ e, v }: { e?: ChangeEvent<any>, v?: Type }) => void;
  touched: boolean;
  invalid: boolean;
  ref: RefObject<H>;
};
export default function useForm<Type, H extends HTMLElement>({
  validator = () => true,
  initValue = undefined,
  valueSet = undefined,
}: UseFormParams<Type>): FormControl<Type, H> {
  const ref = useRef<H>(null);
  const [value, setValue] = useState<Type | undefined>(initValue);
  const [values, setValues] = useState<Type[] | undefined>(valueSet);
  const [touched, setTouched] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<boolean>(false);

  useEffect(() => {
    ref.current?.addEventListener('mousedown', () => {
      setTouched(true);
    }, false);
  }, [ref]);

  const onChange = ({ e, v }: { e?: ChangeEvent<any>, v?: Type }) => {
    let isValid = true;
    if (e) {
      setValue(e.target.value);
      isValid = validator(e.target.value);
    } else {
      setValue(v);
      isValid = validator(v);
    }
    setInvalid(!isValid);
  };

  return {
    value, setValue, values, setValues, onChange, touched, invalid, ref,
  };
}
