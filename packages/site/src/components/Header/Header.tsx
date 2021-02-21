import React from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './styles';

export function Header() {
  return (
    <Styled.Banner>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </Styled.Banner>
  );
}

export default Header;
