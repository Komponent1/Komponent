import React, { useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import TextInput from '../../component/form/textinput/textinput';
import useForm from '../../component/form/useForm';
import mdx from './textInput.docs.mdx';

export default {
  title: 'form|input/textInput',
  component: TextInput,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

const Template: Story<typeof TextInput> = (args) => {
  const ref = useRef(null);
  const validator = () => true;
  const control = useForm<string>(validator);

  return <TextInput ref={ref} control={control} {...args} />;
};
export const general = Template.bind({});
general.args = {
  placeholder: '',
  type: 'text',
  disabled: false,
  scale: 'medium',
};
