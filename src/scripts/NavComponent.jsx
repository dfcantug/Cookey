import React, { Component } from 'react';
import {render} from 'react-dom';
import {Navbar, Nav, NavbarHeader, NavbarBrand, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class NavComp extends React.Component {
  render() {
    return (
          <Navbar style={{height: 65 + 'px'}}>
                <Navbar.Header>
                      <Navbar.Brand>
                         <a href="/"><img style={{width: 40 + 'px'}, {height: 40 + 'px'}} src={'https://s3.amazonaws.com/cookey/cookey_logo.png'} /> </a>
                      </Navbar.Brand>
               </Navbar.Header>
               <Nav>
                     <NavItem eventKey={1} href="#">Link</NavItem>
                     <NavItem eventKey={2} href="#">Link</NavItem>
                     <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                           <MenuItem eventKey={3.1}>Action</MenuItem>
                           <MenuItem eventKey={3.2}>Another action</MenuItem>
                           <MenuItem eventKey={3.3}>Something else here</MenuItem>
                           <MenuItem divider />
                           <MenuItem eventKey={3.3}>Separated link</MenuItem>
                     </NavDropdown>
               </Nav>
     </Navbar>
    );
  };
}

export default NavComp;
