 import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
 
import React, { Component } from 'react'; 
import '../../../App.css';
import './nav.css';

class CustomNav extends Component {
  render() {
    return (
    <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">{this.props.site_name}</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/about">About</NavItem> 
          <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={4.1}>One</MenuItem>
            <MenuItem eventKey={4.2}>Two</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={4.3}>Three</MenuItem> 
          </NavDropdown>
          <NavItem eventKey={5} href="/contact">Contact</NavItem>
        </Nav>
    </Navbar>
    );
  }
}

export default CustomNav; 