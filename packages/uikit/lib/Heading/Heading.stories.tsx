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
