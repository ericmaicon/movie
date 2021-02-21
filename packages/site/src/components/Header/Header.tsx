import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { FaSearch } from 'react-icons/fa';

import { Button, Heading, Input, Text } from '@movie/uikit';
import { FormikValues, useFormik } from 'formik';

import * as Styled from './styles';

interface HeaderProps {
  // eslint-disable-next-line no-unused-vars
  onFilter: (values: FormikValues) => Promise<void>;
}

export default function Header({ onFilter, ...rest }: HeaderProps) {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: async (values) => {
      await onFilter(values);
    },
  });

  return (
    <Styled.Banner {...rest}>
      <Container>
        <Row>
          <Col sm={12}>
            <Styled.NavBar>
              <Button variant="secondary">Login</Button>
              <Button>Sign Up</Button>
            </Styled.NavBar>
          </Col>
        </Row>
      </Container>
      <Styled.TextContainer>
        <Row>
          <Col sm={12}>
            <Heading>Your favorite movies. Explained.</Heading>
            <Text>Figure out what happened. Then find out why.</Text>
          </Col>
        </Row>
        <Row>
          <Col sm={4} offset={{ sm: 4 }}>
            <form onSubmit={formik.handleSubmit} data-testid="form">
              <Input
                id="search"
                name="search"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.search}
                startIcon={
                  <Styled.Button type="submit">
                    <FaSearch />
                  </Styled.Button>
                }
                placeholder="Search for a movie..."
              />
            </form>
          </Col>
        </Row>
      </Styled.TextContainer>
    </Styled.Banner>
  );
}
