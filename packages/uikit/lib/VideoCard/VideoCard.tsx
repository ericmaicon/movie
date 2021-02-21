import React, { ImgHTMLAttributes, useState } from 'react';

import * as Styled from './styles';

export interface VideoCardProps extends ImgHTMLAttributes<HTMLImageElement> {}

const VideoCard = ({
  src = 'https://i.stack.imgur.com/l60Hf.png',
  ...rest
}: VideoCardProps) => {
  const [source, setSource] = useState(src);

  function handleError() {
    setSource('https://i.stack.imgur.com/l60Hf.png');
  }

  return <Styled.VideoCard src={source} onError={handleError} {...rest} />;
};

export default VideoCard;
