import { createContext } from 'react';
import { ICategoriesContext } from '../interfaces/ICategoriesContext';

const CategoriesContext = createContext<ICategoriesContext | null>(null);

export default CategoriesContext;