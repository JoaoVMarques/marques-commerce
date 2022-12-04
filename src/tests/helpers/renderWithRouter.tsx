import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ProductsProvider from '../../Providers/ProductsProvider';
import CategoriesProvider from '../../Providers/CategoriesProvider';

const renderWithRouter = (component : JSX.Element) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <CategoriesProvider>
        <MemoryRouter>
          <ProductsProvider>
            {component}
          </ProductsProvider>
        </MemoryRouter>
      </CategoriesProvider>),
    history,
  });
};

export default renderWithRouter;