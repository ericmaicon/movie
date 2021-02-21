import React from 'react';

import * as Styled from './styles';

interface FooterProps {}

export default function Footer({ ...rest }: FooterProps) {
  return <Styled.Footer {...rest} />;
}
