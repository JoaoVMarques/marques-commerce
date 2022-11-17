import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton } from 'react-bootstrap';
import Products from './Products';
import Categories from './Categories';
import { IPropsNavbar } from '../interfaces/IProps';

function Navbar(props: IPropsNavbar) {
  const { categories } = props;
  return(
    <>
      <h1>Marques-commerce</h1>
      <DropdownButton id="dropdown-categories" title="Categorias" variant="secondary">
        { <Categories categories={ categories } /> }
      </DropdownButton>
      <div>
        { <Products /> }
      </div>
    </>
  );
}

Navbar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }))
};

export default Navbar;