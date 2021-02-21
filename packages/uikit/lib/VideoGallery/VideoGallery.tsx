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
  onSelectItem: (id: string | number) => void;
}

const VideoGallery = ({ items, onSelectItem, ...rest }: VideoGalleryProps) => {
  return (
    <Styled.VideoGallery {...rest}>
      {items.map((item: Item) => (
        <VideoCard
          data-testid="video-card"
          key={item.id}
          src={item.image}
          alt={item.title}
          onClick={() => onSelectItem(item.id)}
        />
      ))}
    </Styled.VideoGallery>
  );
};

export default VideoGallery;
