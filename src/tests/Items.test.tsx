import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import mockFetch from './mocks/MockFetch';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('Testando /Items', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Items', () => {
    it('Ao clicar no item vai ser redirecionado para a página do próprio', async () => {
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
        fireEvent.click(agroCategory);
      });
      const itemName = /Máquina De Solda Inverter Trato Tin160 Verde/i;
      const itemCard = await screen.findByText(itemName);
      expect(itemCard).toBeInTheDocument();
      await act(async() => {
        fireEvent.click(itemCard);
      });
      const buyButton = await screen.findByRole('button', {
        name: /comprar agora/i
      });
      expect(buyButton).toBeInTheDocument();
      const nameItem = await screen.findByText(itemName);
      expect(nameItem).toBeInTheDocument();
    });
  });

  describe('Descrição', () => {
    it('Ao entrar na página o item tem descrição', async () => {
      jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
      renderWithRouter(<App />);
      const categoryButton = screen.getByRole('button', {
        name: /categorias/i
      });
      fireEvent.click(categoryButton);
      const agroCategory = await screen.findByText(/Agro/i);
      await act(async() => {
        fireEvent.click(agroCategory);
      });
      const itemName = /Máquina De Solda Inverter Trato Tin160 Verde/i;
      const itemCard = await screen.findByText(itemName);
      await act(async() => {
        fireEvent.click(itemCard);
      });
      const itemdescription = 'PLACEHOLDER para descrição do item no mock';
      const description = await screen.findByText(itemdescription);
      expect(description).toBeInTheDocument();
    });
  });
});
