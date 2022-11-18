import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes/Routes';
import ProductsProvider from './Providers/ProductsProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './index.css';

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
