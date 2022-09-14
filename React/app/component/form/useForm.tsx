import {
  useState, useRef, RefObject, useEffect,
} from 'react';

type ValidateFunction<Type> = (value: Type) => boolean;
export type FormControl<Type> = {
  value: Type | undefined;
  onChange: (targetValue: Type) => boolean;
  touched: boolean;
  invalid: boolean;
  ref: RefObject<HTMLElement>;
};
export default function useForm<Type>(
  validator: ValidateFunction<Type>,
): FormControl<Type> {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState<Type>();
  const [touched, setTouched] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<boolean>(true);

  useEffect(() => {
    ref.current?.addEventListener('touchend', () => {
      setTouched(true);
    });
  }, [ref]);

  const onChange = (targetValue: Type) => {
    const isValid = validator(targetValue);
    setInvalid(isValid);
    if (!validator(targetValue)) return false;

    setValue(targetValue);
    return true;
  };

  return {
    value, onChange, touched, invalid, ref,
  };
}
