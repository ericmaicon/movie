import React from 'react';

import { Story, Meta } from '@storybook/react';

import VideoCard, { VideoCardProps } from './VideoCard';

export default {
  title: 'Layout/VideoCard',
  component: VideoCard,
} as Meta;

const Template: Story<VideoCardProps> = (args) => <VideoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  src:
    'https://www.themoviedb.org/t/p/w220_and_h330_face/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg',
  alt:
    'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
};
