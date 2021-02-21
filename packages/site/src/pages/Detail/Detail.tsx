import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Skeleton from 'react-loading-skeleton';

import { Movie } from '@movie/core';
import { Heading, Text, Rating, VideoCard } from '@movie/uikit';

import * as Styled from './styles';

interface DetailProps {
  item: Movie | null;
}

export function Detail({ item, ...rest }: DetailProps) {
  return (
    <div {...rest}>
      {item && (
        <Container>
          <Row>
            <Styled.HeaderContainer sm={6}>
              <Heading size={4}>{item.title}</Heading>
            </Styled.HeaderContainer>
            <Styled.RatingContainer sm={6}>
              <Text>Rate:</Text>
              <Rating value={item.rating} />
            </Styled.RatingContainer>
          </Row>
          <Row>
            <Col sm={6}>
              <VideoCard src={item.image} />
            </Col>
            <Col sm={6}>
              <Text>
                <strong>Description:</strong> {item.description}
              </Text>
              <Text>
                <strong>Budget:</strong> {item.budget}
              </Text>
              <Text>
                <strong>Popularity:</strong> {item.popularity}
              </Text>
              <Text>
                <strong>Release Date:</strong> {item.releaseDate}
              </Text>
              <Text>
                <strong>Revenue:</strong> {item.revenue}
              </Text>
              <Text>
                <strong>Tag Line:</strong> {item.tagline}
              </Text>
            </Col>
          </Row>
        </Container>
      )}
      {!item && <Skeleton height={150} />}
    </div>
  );
}

export default Detail;
