import React, { Component } from 'react';
import {render} from 'react-dom';
import {Navbar, Nav, NavbarHeader, NavbarBrand, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const navStyle = {
  height: 100 + 'px',
  marginBottom: 0 + 'px',
  paddingBottom: 10 + 'px',
};

class NavComp extends React.Component {
  render() {
    return (
          <Navbar style={{navStyle}}>
                <Navbar.Header>
                      <Navbar.Brand>
                         <a href="/"><img style={{width: 40 + 'px'}, {height: 40 + 'px'}} src={'https://s3.amazonaws.com/cookey/cookey_logo.png'} /> </a>
                         Cookey
                      </Navbar.Brand>
               </Navbar.Header>
               <Nav style={{paddingLeft: 700 + 'px'}}>
                     <NavDropdown eventKey={3} title="Cook Book" id="basic-nav-dropdown">
                           <MenuItem eventKey={3.1} href = "/cookbook">Dishes</MenuItem>
                           <MenuItem eventKey={3.2} href = "/cookbook">Ingredients</MenuItem>
                     </NavDropdown>
                     <NavItem eventKey={1} href="#">Forum</NavItem>
                     <NavItem eventKey={2} href="#">Login/Sign Up</NavItem>
               </Nav>
          </Navbar>
    );
  };
}

export default NavComp;
