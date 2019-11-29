import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from  'styled-components';


const Styles = styled.div`
  .navbar {
    background-color: #00ccff;
  }
  .navbar-bran,
  .navbar-nav .nav-link {
    color: #ffffff;

    &:hover {
      color: #ffff66;
    }
  }
`;

export default function NavigationBar(){
 return (
   <Styles>
     <Navbar expand="1g">
       <Navbar.Brand href="/">Real News</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="m1-auto">
           <Nav.Item>
             <Nav.Link href="/">Profile</Nav.Link>
             <Nav.Link href="/">Articles</Nav.Link>
             <Nav.Link href="/">Users</Nav.Link>
           </Nav.Item>
         </Nav>
       </Navbar.Collapse>
     </Navbar>
   </Styles>
 );
}