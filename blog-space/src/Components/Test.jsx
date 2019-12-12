import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from 'react-bootstrap';


export default class Test extends React.Component {
 state = {
  open: false
 }

 componentDidMount () {
  this.setState(cS => {
    return {
      open: !cS.open
    };
  });
 }
 handleClick = () => {
  this.setState(cS => {
   return {
    open : !cS.open
   }})
   this.props.changeBack()
 }

 render () {
  const {open} = this.state
  return (
    <Modal isOpen={open}>
      <ModalHeader>Title</ModalHeader>
      <ModalBody>Body</ModalBody>
      <ModalFooter>
        <Button color="primary">Log In</Button>
        <Button color="secondary" onClick={this.handleClick}>
          Exit
        </Button>
      </ModalFooter>
    </Modal>
  );
 }
}