import { createContext } from 'react';
import { IProductsContext } from '../interfaces/IProductsContext';

const ProductsContext = createContext<IProductsContext | null>(null);

export default ProductsContext;