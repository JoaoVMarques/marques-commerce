import React, { useState, FunctionComponent } from 'react';
import ProductsContext from '../context/ProductsContext';
import BaseLayoutProps from '../interfaces/IBaseProps';
import fetchProducts from '../services/fetchProducts';

const ProductsProvider: FunctionComponent<BaseLayoutProps> = (props) => {
  const { children } = props;
  const [products, setProducts] = useState(null);

  const setProductsAPI = async (category: string) => {
    setProducts(await fetchProducts.getAll(category));
  };

  const contextValue = {
    setProductsAPI,
    products,
  };
  return (
    <ProductsContext.Provider value={ contextValue }>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;