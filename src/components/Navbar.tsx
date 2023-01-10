import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavDropdown } from 'react-bootstrap';
import Categories from './Categories';
import { IPropsNavbar } from '../interfaces/IProps';

function NavbarComponent(props: IPropsNavbar) {
  const { categories, notRedirect } = props;
  return(
    <header>
      <Navbar bg="light" variant="light">
        <Navbar.Brand><h1>Marques-commerce</h1></Navbar.Brand>
      </Navbar>
      <Navbar bg="light" variant="light" className="justify-content-center">
        <NavDropdown
          id="dropdown-categories"
          title="Categorias"
        >
          { <Categories categories={ categories } notRedirect={ notRedirect } /> }
        </NavDropdown>
      </Navbar>
    </header>
  );
}

Navbar.propTypes = {
  notRedirect: PropTypes.bool,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }))
};

export default NavbarComponent;