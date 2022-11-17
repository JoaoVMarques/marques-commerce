import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Home from '../pages/Home';
import renderWithRouter from './helpers/renderWithRouter';
import mockFetch from './mocks/MockFetch';
import { act } from 'react-dom/test-utils';
import CARDS from './mocks/Cards';

describe('Testando /home', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Titulo', () => {
    it('verifica se o titulo aparece na tela', () => {
      renderWithRouter(<Home />);
      const linkElement = screen.getByText(/Marques-commerce/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe('Categorias', () => {
    it('As categorias são chamadas com sucesso', async () => {
      jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
      renderWithRouter(<Home />);
      const agroCategory = await screen.findByText(/Agro/i);
      expect(agroCategory).toBeInTheDocument();
    });
  });

  describe('Cards', () => {
    it('Ao clicar nas categorias vao aparecer cards na tela', async () => {
      jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
      renderWithRouter(<Home />);
      const agroCategory = await screen.findByText(/Agro/i);
      expect(agroCategory).toBeInTheDocument();
      await act(async() => {
        fireEvent.click(await screen.findByText(/Agro/i));
      });

      const {results} = CARDS;
      for(const product of results) {
        const productCard = await screen.findByText(`${product.title}`);
        expect(productCard).toBeInTheDocument();
      }
    });
  });
});
