import React, { ImgHTMLAttributes } from 'react';

import * as Styled from './styles';

export interface VideoCardProps extends ImgHTMLAttributes<HTMLImageElement> {}

const VideoCard = (props: VideoCardProps) => {
  return <Styled.VideoCard {...props} />;
};

export default VideoCard;
