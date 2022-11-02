import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWithRouter = (component : JSX.Element) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <MemoryRouter>
        {component}
      </MemoryRouter>),
    history,
  });
};

export default renderWithRouter;