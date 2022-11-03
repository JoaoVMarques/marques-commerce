import React from 'react';
import { screen } from '@testing-library/react';
import Home from '../pages/Home';
import renderWithRouter from './helpers/renderWithRouter';
import CATEGORIES from './mocks/Categories';

describe('Testando /home', () => {
  afterEach(() => jest.clearAllMocks());

  describe('Titulo', () => {
    it('verifica se o titulo aparece na tela', () => {
      renderWithRouter(<Home />);
      const linkElement = screen.getByText(/Marques-commerce/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe('Categorias', () => {
    it('As categorias são chamadas com sucesso', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(CATEGORIES),
        }),
      ) as jest.Mock;
      renderWithRouter(<Home />);
      const otakuCategory = await screen.findByText(/Otaku/i);
      expect(otakuCategory).toBeInTheDocument();
    });
  });
});
