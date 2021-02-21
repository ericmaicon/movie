import React from 'react';

import { VideoCard } from '~/VideoCard/styles';

import * as Styled from './styles';

export interface Item {
  id: string | number;
  image: string;
  title: string;
}

export interface VideoGalleryProps {
  items: Item[];
}

const VideoGallery = ({ items, ...rest }: VideoGalleryProps) => {
  return (
    <Styled.VideoGallery {...rest}>
      {items.map((item: Item) => (
        <VideoCard key={item.id} src={item.image} alt={item.title} />
      ))}
    </Styled.VideoGallery>
  );
};

export default VideoGallery;
