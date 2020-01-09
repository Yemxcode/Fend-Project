import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../MyContext";
export default class CommentsForm extends React.Component {
  state = {
    body: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };



  render() {
   const  {body} = this.state;
    return (
      <>
      <Context.Consumer>
          {context => (context.state.loggedInAs && <form className="signUpForm" onSubmit={ e =>
                  {e.preventDefault();
                  this.props.postBody(body, context.state.loggedInAs)
                  this.setState({ body: "" });}}>
          <textarea
            name="body"
            type="text"
            value={body}
            onChange={this.handleChange}
            required
            className="signUpInput"
            placeholder="type your comments here...."
          ></textarea>
            <button className="postBtn" type="submit">
            Post    <FontAwesomeIcon icon={faCommentAlt} />
          </button>
        </form>)}</Context.Consumer>
      </>
    );
  }
}
