import React from 'react';

import { Story, Meta } from '@storybook/react';

import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  children: 'Heading 1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'Heading 2',
  size: 2,
};

export const Heading3 = Template.bind({});
Heading3.args = {
  children: 'Heading 3',
  size: 3,
};

export const Heading4 = Template.bind({});
Heading4.args = {
  children: 'Heading 4',
  size: 4,
};

export const Heading5 = Template.bind({});
Heading5.args = {
  children: 'Heading 5',
  size: 5,
};
