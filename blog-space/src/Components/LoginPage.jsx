import React from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "react-bootstrap";
import { Context } from "../MyContext";

export default class LoginPage extends React.Component {
  state = {
    open: false,
    user: ""
  };

  componentDidMount() {
    this.setState(cS => {
      return {
        open: !cS.open
      };
    });
  }
  handleClick = () => {
    this.setState(cS => {
      return {
        open: !cS.open
      };
    });
    this.props.changeBack();
  };
  handleChange = event => {
    const { name, value } = event.target;
    value !== null && this.setState({ [name]: value });
  };
  render() {
    const { open, user } = this.state;
    return (
      <Modal className="modal" isOpen={open}>
        <ModalBody className="modalBody">
          <Context.Consumer>
            {context => (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  context.logIn(user);
                  this.state.user.length &&this.setState({open: false})
                  this.props.changeBack();
                }}
              >
                <select onChange={this.handleChange} required value={user} name="user">
                  <option disabled value="">Select User</option>
                  {this.props.users.map(user => (
                    <option key={user.username} value={user.username}>
                      {user.username}
                    </option>
                  ))}
                </select>
                <button className="logInBtn"  type="submit">Log In</button>
              </form>
            )}
          </Context.Consumer>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClick}>
            Exit
          </Button>
        </ModalFooter>
      </Modal >
    );
  }
}
