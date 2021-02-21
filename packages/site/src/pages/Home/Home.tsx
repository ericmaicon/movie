import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Skeleton from 'react-loading-skeleton';

import { Heading, VideoGallery } from '@movie/uikit';
import { FormikValues } from 'formik';

import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

import * as Styled from './styles';

export interface Item {
  id: string | number;
  image: string;
  title: string;
  link: string;
}

interface HomeProps {
  onFilter: (values: FormikValues) => Promise<void>;

  items: Item[] | null;
}

export function Home({ onFilter, items, ...rest }: HomeProps) {
  return (
    <div {...rest}>
      <Header onFilter={onFilter} />
      <Container>
        <Row>
          <Styled.HeaderContainer sm={12}>
            <Styled.StyledFire /> <Heading size={4}>Popular Movies</Heading>
          </Styled.HeaderContainer>
        </Row>
        <Row>
          <Col sm={12}>
            {items ? <VideoGallery items={items} /> : <Skeleton />}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
