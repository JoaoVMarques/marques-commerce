import React, { useState, FunctionComponent } from 'react';
import ProductsContext from '../context/ProductsContext';
import BaseLayoutProps from '../interfaces/IBaseProps';

const ProductsProvider: FunctionComponent<BaseLayoutProps> = (props) => {
  const { children } = props;
  const [products, setProducts] = useState(null);

  const setProductsAPI = async (category: string) => {
    console.log(`Categoria: ${category}`);
  };

  const contextValue = {
    setProductsAPI,
  };
  return (
    <ProductsContext.Provider value={ contextValue }>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;