import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import { Button } from '@movie/uikit';

import * as Styled from './styles';

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <Styled.Banner {...props}>
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
    </Styled.Banner>
  );
}
