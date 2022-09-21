import React from 'react';
import { Meta, Story } from '@storybook/react';
import Select from '../../component/form/select/select';
import useForm from '../../component/form/useForm';
// import mdx from './textInput.docs.mdx';

export default {
  title: 'form|select/select',
  component: Select,
  // parameters: {
  //   docs: {
  //     // page: mdx,
  //   },
  // },
} as Meta;

const Template: Story<typeof Select> = (args) => {
  const validator = () => true;
  const valueSet = [1, 2, 3];
  const label = ['일', '이', '삼'];

  const control = useForm<number, HTMLDivElement>({
    validator,
    valueSet,
  });

  return (
    <Select
      width="320px"
      control={control}
      label={label}
      {...args}
    />
  );
};
export const general = Template.bind({});
general.args = {

};
