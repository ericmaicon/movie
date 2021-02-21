import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Skeleton from 'react-loading-skeleton';

import { Movie } from '@movie/core';
import { Heading, VideoGallery } from '@movie/uikit';

import * as Styled from './styles';

interface HomeProps {
  onSelectItem: (id: number | string) => Promise<void>;

  items: Movie[] | null;
}

export function Home({ onSelectItem, items, ...rest }: HomeProps) {
  return (
    <div {...rest}>
      <Container>
        <Row>
          <Styled.HeaderContainer sm={12}>
            <Styled.StyledFire /> <Heading size={4}>Popular Movies</Heading>
          </Styled.HeaderContainer>
        </Row>
        <Row>
          <Col sm={12}>
            {items ? (
              <VideoGallery items={items} onSelectItem={onSelectItem} />
            ) : (
              <Skeleton height={150} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
