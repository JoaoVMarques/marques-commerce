import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes/Routes';
import ProductsProvider from './Providers/ProductsProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './index.css';
import CategoriesProvider from './Providers/CategoriesProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CategoriesProvider>
    <ProductsProvider>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </ProductsProvider>
  </CategoriesProvider>
);
reportWebVitals();
