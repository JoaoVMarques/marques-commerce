import React, { useState, FunctionComponent } from 'react';
import ProductsContext from '../context/ProductsContext';
import BaseLayoutProps from '../interfaces/IBaseProps';
import { IProducts } from '../interfaces/IProductsContext';
import fetchProducts from '../services/fetchProducts';

const ProductsProvider: FunctionComponent<BaseLayoutProps> = (props) => {
  const { children } = props;
  const [products, setProducts] = useState<IProducts[] | []>([]);

  const setProductsAPI = async (category: string) => {
    const products = await fetchProducts.getAll(category);
    setProducts(products as IProducts[]);
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