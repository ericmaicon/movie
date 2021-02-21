import React from 'react';
import { useHistory } from 'react-router-dom';

import { FormikValues } from 'formik';

import { Header } from '~/components/Header';

export function HeaderContainer() {
  const history = useHistory();

  async function handleFilter({ search }: FormikValues) {
    if (search) {
      history.push(`/search?search=${search}`);
    } else {
      history.push(`/`);
    }
  }
  return <Header onFilter={handleFilter} />;
}

export default HeaderContainer;
