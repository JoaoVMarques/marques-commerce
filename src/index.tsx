import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './Providers/ProductsProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './index.css';
import CategoriesProvider from './Providers/CategoriesProvider';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CategoriesProvider>
    <ProductsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsProvider>
  </CategoriesProvider>
);
reportWebVitals();
