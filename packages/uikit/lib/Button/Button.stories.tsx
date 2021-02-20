import React from 'react';

import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Form/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Sign Up',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Login',
  variant: 'secondary',
};
