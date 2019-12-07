import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from  'styled-components';


const Styles = styled.div`
  .navbar {
    background-color: #333333;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ffffff;

    &:hover {
      color: #b3b3b3;
    }
  }
`;

export default function NavigationBar(){
 return (
   <Styles>
     <Navbar expand="1g">
       <Navbar.Brand href="/">Blog Space</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="m1-auto">
           <Nav.Item>
             <Nav.Link href="/profile">Profile</Nav.Link>
             <Nav.Link href="/articles">Articles</Nav.Link>
             <Nav.Link href="/users">Users</Nav.Link>
           </Nav.Item>
         </Nav>
       </Navbar.Collapse>
     </Navbar>
   </Styles>
 );
}