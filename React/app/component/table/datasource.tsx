import { useState } from 'react';

type Data = { [key: string]: any };
type Column = {
  value: string;
  label?: string;
  sort?: (a: { [key: string]: any; }, b: { [key: string]: any; }) => number,
};
export type DataSource = {
  datas: Data[];
  columns: Column[];
  sort: (col: Column) => void;
};
export const useDataSource = (rawData: Data[], rawCols?: Column[]): DataSource => {
  const [datas, setDatas] = useState<Data[]>(rawData);
  const [columns] = useState<Column[]>(
    rawCols !== undefined
      ? rawCols
      : Object.keys(datas[0]).map((key) => ({ value: key })),
  );

  const sort = (col: Column) => {
    if (col.sort !== undefined) {
      const sortFunction = col.sort;
      setDatas([...datas].sort((a, b) => sortFunction(a[col.value], b[col.value])));
    }
  };

  return {
    datas, columns, sort,
  };
};
