import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes/Routes';
import ProductsProvider from './Providers/ProductsProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ProductsProvider>
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  </ProductsProvider>
);
reportWebVitals();
