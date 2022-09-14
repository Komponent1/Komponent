import React from 'react';
import { Story, Meta } from '@storybook/react';
import Table, { TableProps } from '../../component/table/table';
import { useDataSource } from '../../component/table/datasource';

export default {
  title: 'components|basic/table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => {
  const rawData = [
    { name: 'test1', number: 5, message: 'abcdefghijklmnop1' },
    { name: 'test4', number: 1, message: 'abcdefghijklmnop2' },
    { name: 'test2', number: 3, message: 'abcdefghijklmnop3' },
    { name: 'test3', number: 2, message: 'abcdefghijklmnop4' },
    { name: 'test6', number: 4, message: 'abcdefghijklmnop5' },
    { name: 'test5', number: 6, message: 'abcdefghijklmnop6' },
  ];
  const columns = [
    {
      value: 'name',
      label: '이름',
      sort: (a: { [key: string]: any }, b: { [key: string]: any }) => (a > b ? 1 : -1),
    },
    {
      value: 'number',
      label: '순번',
      sort: (a: { [key: string]: any }, b: { [key: string]: any }) => (a > b ? 1 : -1),
    },
    {
      value: 'message',
      label: '메시지',
      // sort: (a: { [key: string]: any }, b: { [key: string]: any }) => (a > b ? 1 : -1),
    },
  ];

  const datasource = useDataSource(rawData, columns);

  return <Table dataSource={datasource} {...args} />;
};
export const general = Template.bind({});
general.args = {

};
