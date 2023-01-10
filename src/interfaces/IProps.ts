import { ReactNode } from 'react';
import ICategories from './ICategories';

export interface BaseLayoutProps {
  children?: ReactNode;
}

export interface IPropsNavbar {
  categories: ICategories[],
  notRedirect?: boolean,
}
