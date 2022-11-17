import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, Navbar } from 'react-bootstrap';
import Categories from './Categories';
import { IPropsNavbar } from '../interfaces/IProps';

function NavbarComponent(props: IPropsNavbar) {
  const { categories } = props;
  return(
    <Navbar>
      <Navbar.Brand><h1>Marques-commerce</h1></Navbar.Brand>
      <DropdownButton id="dropdown-categories" title="Categorias" variant="secondary">
        { <Categories categories={ categories } /> }
      </DropdownButton>
    </Navbar>
  );
}

Navbar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }))
};

export default NavbarComponent;