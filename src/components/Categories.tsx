import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ICategories from '../interfaces/ICategories';
import { Form } from 'react-bootstrap';
import fetchProducts from '../services/fetchProducts';
import ProductsContext from '../context/ProductsContext';
import IProductsContext from '../interfaces/IProductsContext';


function Categories(props: { categories: ICategories[] }) {
  const { setProductsAPI } = useContext(ProductsContext) as IProductsContext;
  const { categories } = props;
  return (
    <form>
      { categories.map((category) =>
        (
          <Form.Check 
            key={ category.id }
            id={ category.id }
            value={ category.name }
            label={ category.name }
            onClick={ () => setProductsAPI(category.id) }
            type="radio"
            name="category"
          />
        ))}
    </form>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Categories;
