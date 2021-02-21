import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Skeleton from 'react-loading-skeleton';

import { Movie } from '@movie/core';
import { Heading, VideoList, Text, Rating } from '@movie/uikit';
import { FormikValues, useFormik } from 'formik';

import * as Styled from './styles';

interface SearchProps {
  onFilterRating: (values: FormikValues) => Promise<void>;

  onSelectItem: (id: number | string) => Promise<void>;

  items: Movie[] | null;
}

export function Search({
  onFilterRating,
  onSelectItem,
  items,
  ...rest
}: SearchProps) {
  const formik = useFormik({
    initialValues: {
      rating: 0,
    },
    onSubmit: async (values) => {
      await onFilterRating(values);
    },
  });

  useEffect(() => {
    formik.submitForm();
  }, [formik.values]);

  function setRatingValue(selectedValue: number) {
    if (selectedValue === formik.values.rating) {
      formik.setFieldValue('rating', 0);
    } else {
      formik.setFieldValue('rating', selectedValue);
    }
  }

  return (
    <div {...rest}>
      <Container>
        <Row>
          <Styled.HeaderContainer sm={6}>
            <Styled.StyledSearch /> <Heading size={4}>Searched Movies</Heading>
          </Styled.HeaderContainer>
          <Styled.RatingContainer sm={6}>
            <Text>Filter by Rating:</Text>
            <form onSubmit={formik.handleSubmit} data-testid="form">
              <Rating onChange={setRatingValue} value={formik.values.rating} />
            </form>
          </Styled.RatingContainer>
        </Row>
        <Row>
          <Col sm={12}>
            {items && items.length >= 1 ? (
              <VideoList onSelectItem={onSelectItem} items={items} />
            ) : (
              <Text>There is not results with such query</Text>
            )}
            {!items && <Skeleton height={150} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
