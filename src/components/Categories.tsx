import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import ProductsContext from '../context/ProductsContext';
import { IProductsContext } from '../interfaces/IProductsContext';
import { IPropsNavbar } from '../interfaces/IProps';
import { useNavigate } from 'react-router-dom';
import ICategories from '../interfaces/ICategories';


function Categories(props: IPropsNavbar) {
  const { setProductsAPI } = useContext(ProductsContext) as IProductsContext;
  const navigate = useNavigate();
  const { categories, notRedirect } = props;

  const redirectOrNot = (category : ICategories) => {
    if(!notRedirect) {
      navigate('search');
    }
    setProductsAPI(category.id);
  };

  return (
    <form>
      { categories.map((category) =>
        (
          <Dropdown.Item
            key={ category.id }
            id={ category.id }
            label={ category.name }
            onClick={ () => redirectOrNot(category) }
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
  notRedirect: PropTypes.bool,
  categories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Categories;
