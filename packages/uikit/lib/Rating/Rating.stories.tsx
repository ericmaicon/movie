import React, { useState } from 'react';

import { Story, Meta } from '@storybook/react';

import Rating, { RatingProps } from './Rating';

export default {
  title: 'Form/Rating',
  component: Rating,
} as Meta;

const Template: Story<RatingProps> = ({
  value,
  onChange,
  ...args
}: RatingProps) => {
  const [star, setStar] = useState<number>(value);
  return <Rating value={star} onChange={setStar} {...args} />;
};

export const Rating1 = Template.bind({});
Rating1.args = {
  value: 1,
};

export const Rating3 = Template.bind({});
Rating3.args = {
  value: 3,
};

export const Rating5 = Template.bind({});
Rating5.args = {
  value: 5,
};

export const Rating7 = Template.bind({});
Rating7.args = {
  value: 7,
};

export const Rating9 = Template.bind({});
Rating9.args = {
  value: 9,
};
