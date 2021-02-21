import React from 'react';

import { Story, Meta } from '@storybook/react';

import VideoList, { VideoListProps } from './VideoList';

export default {
  title: 'Layout/VideoList',
  component: VideoList,
} as Meta;

const Template: Story<VideoListProps> = (args) => <VideoList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 1,
      image:
        'https://www.themoviedb.org/t/p/w220_and_h330_face/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg',
      title: 'When the crew',
      description:
        'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
      rating: 10,
    },
    {
      id: 2,
      image:
        'https://www.themoviedb.org/t/p/w220_and_h330_face/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg',
      title: 'When the crew',
      description:
        'When the crew of a space junk collector ship called The Victory discovers a humanoid..',
      rating: 2,
    },
  ],
};
