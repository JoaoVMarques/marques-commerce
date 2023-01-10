import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import mockFetch from './mocks/MockFetch';
import { act } from 'react-dom/test-utils';
import CARDS from './mocks/Cards';
import Search from '../pages/Search';

describe('Testando /Search', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Categorias', () => {
    it('As categorias são chamadas com sucesso', async () => {
      jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
      renderWithRouter(<Search />);
      const categoryButton = screen.getByRole('button', {
        name: /categorias/i
      });
      expect(categoryButton).toBeInTheDocument();
      fireEvent.click(categoryButton);

      const agroCategory = await screen.findByText(/Agro/i);
      expect(agroCategory).toBeInTheDocument();
    });
  });

  describe('Cards', () => {
    it('Ao clicar nas categorias vao aparecer cards na tela', async () => {
      jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
      renderWithRouter(<Search />);
      const categoryButton = screen.getByRole('button', {
        name: /categorias/i
      });
      expect(categoryButton).toBeInTheDocument();
      fireEvent.click(categoryButton);

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
