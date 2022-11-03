import React from 'react';
import PropTypes from 'prop-types';
import ICategories from '../interfaces/ICategories';
import { Form } from 'react-bootstrap';


function Categories(props: { categories: ICategories[] }) {
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
