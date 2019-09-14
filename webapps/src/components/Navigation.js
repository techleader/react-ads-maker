import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, 
  MDBNavLink, MDBNavbarToggler, MDBCollapse,MDBIcon,MDBBtn } from "mdbreact";

class Navigation extends Component {

  state = {
    isOpen: ""
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
   
    return (
      <div>
         
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
        <img src={require('../image/Capture.PNG')} weight="50px" height="40px" class="avatar shadow-box-example hoverable" />
          
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right >
            <MDBNavItem active>
              <MDBNavLink to="/Home" >Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Admin">CreateAds</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="Login">SignIn</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="SignUp">SignUp</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
           
          </MDBNavbarNav>
          
        </MDBCollapse>
      </MDBNavbar>
    
      
      </div>
    );
  }
}


export default (Navigation);