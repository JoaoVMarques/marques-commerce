import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import IProductsContext from '../interfaces/IProductsContext';
import ProductsCard from './ProductsCard';

function Products() {
  const { products } = useContext(ProductsContext) as IProductsContext;
  console.log(products);
  return (
    <div>
      { products && products.map((product) => (
        <ProductsCard
          key={ product.id } 
          name={ product.title }
        />
      ))}
    </div>
  );
}

export default Products;
