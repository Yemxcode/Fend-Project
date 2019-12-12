import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from  'styled-components';
import Test from '../Components/Test'


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

export default class NavigationBar extends React.Component {
                 state = {
                   open: false
                 };

                 handleClick = () => {
                   this.setState(cS => {
                     return { open: !cS.open };
                   });
                 };

                 changeBack = () => {
                   this.setState(cS => {
                     return { open: !cS.open };
                   });
                 }
                 render() {
                   const { open } = this.state;
                   return (
                     <>
                       <Styles>
                          <Navbar expand="1g">
                           <Navbar.Brand href="/">Blog Space</Navbar.Brand>
                           <Navbar.Toggle aria-controls="basic-navbar-nav" />
                           <Navbar.Collapse id="basic-navbar-nav">
                             <Nav className="m1-auto">
                               {!open && <Nav.Item>
                                 <Nav.Link href="/profile">Profile</Nav.Link>
                                 <Nav.Link href="/articles">Articles</Nav.Link>
                                 <Nav.Link href="/users">Users</Nav.Link>
                                 <Nav.Link onClick={this.handleClick}>
                                   Log In
                                 </Nav.Link>
                               </Nav.Item>}
                             </Nav>
                           </Navbar.Collapse>
                         </Navbar>
                       </Styles>
                       {open && <Test changeBack={this.changeBack}/>}
                     </>
                   );
                 }
               }