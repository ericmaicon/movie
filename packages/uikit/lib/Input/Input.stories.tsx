import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Story, Meta } from '@storybook/react';

import Input, { InputProps } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  placeholder: 'Search for a movie...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  valid: false,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  startIcon: <FaSearch />,
};
