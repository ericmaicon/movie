import React from 'react';

import { Button } from '~/Button/styles';
import Heading from '~/Heading';
import Rating from '~/Rating';
import Text from '~/Text';
import { VideoCard } from '~/VideoCard/styles';

import * as Styled from './styles';

export interface Item {
  id: string | number;
  image: string;
  title: string;
  description: string;
  rating: number;
}

export interface VideoListProps {
  items: Item[];
  onSelectItem: (id: string | number) => void;
}

const VideoList = ({ items, onSelectItem, ...rest }: VideoListProps) => {
  return (
    <Styled.VideoList {...rest}>
      {items.map((item: Item) => (
        <li key={item.id}>
          <VideoCard
            src={item.image}
            alt={item.title}
            onClick={() => onSelectItem(item.id)}
            data-testid="image"
          />
          <div>
            <Heading
              onClick={() => onSelectItem(item.id)}
              size={5}
              data-testid="header"
            >
              {item.title}
            </Heading>
            <Text>{item.description}</Text>
            <Rating value={item.rating} />
            <Button onClick={() => onSelectItem(item.id)}>Check it out</Button>
          </div>
        </li>
      ))}
    </Styled.VideoList>
  );
};

export default VideoList;
