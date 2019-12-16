import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import LoginPage from "../Components/LoginPage";
import * as api from "../Api";
import { Context } from "../MyContext";
import { navigate } from "@reach/router";

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
      .then(({ users }) => this.setState({ users, isLoading: false }))
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
            <Navbar.Brand onClick={() => navigate("/")}>
              Blog Space
            </Navbar.Brand>
            <Context.Consumer>
              {context => (
                <Navbar.Brand
                  onClick={() => navigate(`/users/${context.state.loggedInAs}`)}
                >
                  {context.state.loggedInAs ? `Hello!  ${context.state.loggedInAs}` : 'Welcome'}
                </Navbar.Brand>
              )}
            </Context.Consumer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m1-auto">
                {!open && (
                  <Nav.Item>
                    <Nav.Link onClick={() => navigate("/articles")}>
                      Articles
                    </Nav.Link>
                    <Nav.Link value="users" onClick={() => navigate("/users")}>
                      {" "}
                      Users
                    </Nav.Link>
                    <Nav.Link onClick={this.handleClick}>Log In</Nav.Link>
                  </Nav.Item>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles>
        {open && <LoginPage users={users} changeBack={this.changeBack} />}
      </>
    );
  }
}
