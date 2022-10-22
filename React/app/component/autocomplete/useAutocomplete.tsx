import { ChangeEvent, useState } from 'react';

export type AutoControlFunction = (text: string) => Promise<string[]>;
export type UseAutocompleteParam = {
  controlValue: string[] | AutoControlFunction;
};
export const useAutocomplete = ({
  controlValue,
}: UseAutocompleteParam) => {
  const [value, setValue] = useState<string>('');
  const [values, setValues] = useState<string[]>([]);
  const onChange = async ({
    e,
    v,
  }: { e?: ChangeEvent<HTMLInputElement>, v?: string }) => {
    if (controlValue.length) {
      setValues(
        (controlValue as string[])
          .filter((init) => init.includes(e ? e.target.value : v as string)),
      );
    } else {
      if (controlValue.length === 0) return;
      const valueSet = await (controlValue as AutoControlFunction)(
        e ? e.target.value : v as string,
      );
      setValues(valueSet);
    }
    setValue(
      e ? e.target.value : v as string,
    );
  };

  return {
    onChange, values, value,
  };
};
