import React, { useState, FunctionComponent, useEffect } from 'react';
import CategoriesContext from '../context/CategoriesContext';
import ICategories from '../interfaces/ICategories';
import { BaseLayoutProps } from '../interfaces/IProps';
import fetchCategories from '../services/fetchCategories';


const CategoriesProvider: FunctionComponent<BaseLayoutProps> = (props) => {
  const [ categories, setCategories ] = useState<ICategories[]>([]);
  const fetchAPI = async() => {
    setCategories(await fetchCategories.getAll());
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  const { children } = props;

  const contextValue = {
    categories
  };
  return (
    <CategoriesContext.Provider value={ contextValue }>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;