import React from 'react';
import * as S from './style';
import { DataSource } from './datasource';

export type TableProps = {
  /** useDataSource 이용 */
  dataSource: DataSource;
  /** column 존재여부 */
  design: 'primary-no-col' | 'primary',
};
function Table({
  dataSource,
  design = 'primary',
}: TableProps) {
  const { datas, columns, sort } = dataSource;

  return (
    <S.table>
      {design.search('no-col') === -1 && (
        <S.thead>
          <S.tr>
            {columns.map((col) => (
              <S.th>
                {col.label ? col.label : col.value}
                {col.sort && <S.sortIcon type="button" onClick={() => sort(col)}>▼</S.sortIcon>}
              </S.th>
            ))}
          </S.tr>
        </S.thead>
      )}
      <S.tbody>
        {datas.map((data) => (
          <S.tr>
            {columns.map((col) => (
              <S.td>
                {data[col.value]}
              </S.td>
            ))}
          </S.tr>
        ))}
      </S.tbody>
    </S.table>
  );
}

export default Table;
