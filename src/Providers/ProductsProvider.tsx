import React, { useState, FunctionComponent } from 'react';
import ProductsContext from '../context/ProductsContext';
import PicturesFunction from '../functions/PicturesFunction';
import ProductsFunction from '../functions/ProductsFunction';
import { IProducts } from '../interfaces/IProductsContext';
import { BaseLayoutProps } from '../interfaces/IProps';
import fetchProducts from '../services/fetchProducts';

const ProductsProvider: FunctionComponent<BaseLayoutProps> = (props) => {
  const { children } = props;
  const [products, setProducts] = useState<IProducts[] | []>([]);

  const setProductsAPI = async (category: string) => {
    const productsObject: IProducts[] = await fetchProducts.getAll(category);
    const pictures: string[] = await PicturesFunction.getProductPicture(productsObject);
    const products = await ProductsFunction.mergeWithPic(productsObject, pictures);
    console.log(products);
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