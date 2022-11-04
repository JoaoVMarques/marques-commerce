import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ProductsProvider from '../../Providers/ProductsProvider';

const renderWithRouter = (component : JSX.Element) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <MemoryRouter>
        <ProductsProvider>
          {component}
        </ProductsProvider>
      </MemoryRouter>),
    history,
  });
};

export default renderWithRouter;