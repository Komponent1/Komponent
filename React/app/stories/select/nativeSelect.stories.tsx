import React from 'react';
import { Meta, Story } from '@storybook/react';
import NativeSelect from '../../component/form/select/nativeSelect';
import useForm from '../../component/form/useForm';
// import mdx from './textInput.docs.mdx';

export default {
  title: 'form|select/NatvieSelect',
  component: NativeSelect,
  // parameters: {
  //   docs: {
  //     // page: mdx,
  //   },
  // },
} as Meta;

const Template: Story<typeof NativeSelect> = (args) => {
  const validator = () => true;
  const valueSet = [1, 2, 3];
  const label = ['일', '이', '삼'];
  const control = useForm<number, HTMLSelectElement>({
    validator,
    valueSet,
  });

  return (
    <NativeSelect
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
