import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Home from '../pages/Home';
import renderWithRouter from './helpers/renderWithRouter';
import mockFetch from './mocks/MockFetch';
import { act } from 'react-dom/test-utils';
import CARDS from './mocks/Cards';
import App from '../App';

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

  describe('Cards', () => {
    it('Ao clicar na categoria o usúario vai ser redirecionado', async () => {
      jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
      renderWithRouter(<App />);
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

      const PesquisaText = await screen.findByText(/pesquisa/i);
      expect(PesquisaText).toBeInTheDocument();
    });
  });
});
