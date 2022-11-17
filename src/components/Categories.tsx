import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ICategories from '../interfaces/ICategories';
import { Dropdown } from 'react-bootstrap';
import ProductsContext from '../context/ProductsContext';
import { IProductsContext } from '../interfaces/IProductsContext';


function Categories(props: { categories: ICategories[] }) {
  const { setProductsAPI } = useContext(ProductsContext) as IProductsContext;
  const { categories } = props;
  return (
    <form>
      { categories.map((category) =>
        (
          <Dropdown.Item
            key={ category.id }
            id={ category.id }
            label={ category.name }
            onClick={ () => setProductsAPI(category.id) }
            type="radio"
            name="category"
          > 
            { category.name }
          </Dropdown.Item>
        ))}
    </form>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Categories;
