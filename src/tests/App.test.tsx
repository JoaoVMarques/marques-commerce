import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testando /home', () => {
  it('verifica se o titulo aparece na tela', () => {
    renderWithRouter(<App />)
    const linkElement = screen.getByText(/Marques-commerce/i);
    expect(linkElement).toBeInTheDocument();
  });
})
