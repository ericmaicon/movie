import React from 'react';

import { Story, Meta } from '@storybook/react';

import Text, { TextProps } from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Text1 = Template.bind({});
Text1.args = {
  children: 'Text 1',
};
