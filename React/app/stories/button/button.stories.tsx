import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../../component/button/button';

export default {
  title: 'components|basic/button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const general = Template.bind({});
general.args = {
  disabled: false,
};
