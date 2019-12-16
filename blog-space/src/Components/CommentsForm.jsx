import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faComment } from "@fortawesome/free-solid-svg-icons";
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
        {context => <form onSubmit={ e =>
                  {e.preventDefault();
                  body.length && this.props.postBody(body, context.state.loggedInAs)
                  this.setState({ body: "" });}}>
          <textarea
            name="body"
            type="text"
            value={body}
            onChange={this.handleChange}
            required
            placeholder="type comments"
          ></textarea>
          <button>
            Post
            <FontAwesomeIcon icon={faComment} />
          </button>
    </form>}</Context.Consumer>
      </>
    );
  }
}
