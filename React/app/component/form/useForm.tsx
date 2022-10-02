import { useFormControl, FormControl, UseFormControlParams } from './useFormControl';

type FormType =
  'multi-text-input'
  | 'select'
  | 'text-input';
type UseFormParams = {
  id: string;
  type: FormType;
  controlOption: UseFormControlParams<any>;
}[];
export const useForm = (forms: UseFormParams, callback: Function) => {
  const controls = forms.reduce<{ [key: string]: FormControl<any, any> }>((acc, cur) => {
    if (cur.type === 'select') {
      acc[cur.id] = useFormControl<string, HTMLDivElement>(cur.controlOption);
    } else if (cur.type === 'multi-text-input') {
      acc[cur.id] = useFormControl<string[], HTMLInputElement>(cur.controlOption);
    } else if (cur.type === 'text-input') {
      acc[cur.id] = useFormControl<string, HTMLInputElement>(cur.controlOption);
    }
    return acc;
  }, {});

  const submit = () => {
    const data = Object.keys(controls)
      .reduce<{ [key: string]: any }>((acc, cur) => {
      acc[cur] = controls[cur].value;
      return acc;
    }, {});
    callback(data);
  };

  return { controls, submit };
};
