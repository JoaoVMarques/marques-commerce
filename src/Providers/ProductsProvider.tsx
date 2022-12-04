import React, { useState, FunctionComponent } from 'react';
import ProductsContext from '../context/ProductsContext';
import PicturesFunction from '../functions/PicturesFunction';
import ProductsFunction from '../functions/ProductsFunction';
import { IPictures } from '../interfaces/IPictures';
import { IProducts } from '../interfaces/IProductsContext';
import { BaseLayoutProps } from '../interfaces/IProps';
import fetchProducts from '../services/fetchProducts';

const ProductsProvider: FunctionComponent<BaseLayoutProps> = (props) => {
  const { children } = props;
  const [products, setProducts] = useState<IProducts[] | []>([]);

  const setProductsAPI = async (category: string) => {
    const productsObject: IProducts[] = await fetchProducts.getAll(category);
    const pictures: IPictures[] = await PicturesFunction.get(productsObject);
    const products = await ProductsFunction.mergeWithPic(productsObject, pictures);
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