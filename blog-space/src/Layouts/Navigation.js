import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import styled from  'styled-components';
import Test from '../Components/Test';
import * as api from '../Api'
import { Context } from "../MyContext";
import {Link} from "@reach/router";


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
                   open: false,
                   users: []
                 };

                 componentDidMount() {
                   api
                     .getUsers()
                     .then(({ users }) =>
                       this.setState({ users, isLoading: false })
                     )
                     .catch(({ response }) =>
                       this.setState({
                         error: { status: response.status, msg: response.data },
                         isLoading: false
                       })
                     );
                 }

                 handleClick = () => {
                   this.setState(cS => {
                     return { open: !cS.open };
                   });
                 };

                 changeBack = () => {
                   this.setState(cS => {
                     return { open: !cS.open };
                   });
                 };
                 render() {
                   const { open, users } = this.state;
                   return (
                     <>
                       <Styles>
                         <Navbar expand="1g">
                           <Navbar.Brand ><Link to="/">Blog Space</Link></Navbar.Brand>
                           <Context.Consumer>
                             {context => (
                               <Navbar.Brand>
                                 <Link to={`/users/${context.state.loggedInAs}`}>
                                   {context.state.loggedInAs}
                                 </Link>
                               </Navbar.Brand>
                             )}
                           </Context.Consumer>
                           <Navbar.Toggle aria-controls="basic-navbar-nav" />
                           <Navbar.Collapse id="basic-navbar-nav">
                             <Nav className="m1-auto">
                               {!open && (
                                 <Nav.Item>
  
                                   <Nav.Link >
                                     <Link to="/articles">Articles</Link>
                                   </Nav.Link>
                                   <Nav.Link >  <Link to="/users">Users</Link></Nav.Link>
                                   <Nav.Link onClick={this.handleClick}>
                                     Log In
                                   </Nav.Link>
                                 </Nav.Item>
                               )}
                             </Nav>
                           </Navbar.Collapse>
                         </Navbar>
                       </Styles>
                       {open && (
                         <Test users={users} changeBack={this.changeBack} />
                       )}
                     </>
                   );
                 }
               }