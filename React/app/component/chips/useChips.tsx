import { useState } from 'react';

export type ChipData = {
  id: number;
  value: string;
};
const findNextId = (ids: number[]) => {
  if (ids.length === 0) return 1;
  return Math.max(...ids) + 1;
};
const generateData = (value: string, datas: ChipData[]): ChipData => ({
  id: findNextId(datas.map((data) => data.id)),
  value,
});
const initData = (init: string[]) => init.map((value, i) => ({
  id: i,
  value,
}));

export const useChips = (init?: string[]) => {
  const [chips, setChips] = useState<ChipData[]>(init ? initData(init) : []);

  const deleteChip = (target: ChipData) => {
    setChips(chips.filter((chip) => chip.id !== target.id));
  };
  const updateChip = (value: string, forward?: boolean) => {
    if (forward === true) {
      setChips([generateData(value, chips), ...chips]);
    } else {
      setChips([...chips, generateData(value, chips)]);
    }
  };

  return {
    chips, deleteChip, updateChip,
  };
};
