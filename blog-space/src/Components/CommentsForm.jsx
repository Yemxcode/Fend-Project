import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faComment } from "@fortawesome/free-solid-svg-icons";
export default class CommentsForm extends React.Component {
  state = {
    body: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
   event.preventDefault();
   this.state.body.length && this.props.postBody(this.state.body)
   this.setState({body : ""})
  }


  render() {
   const  {body} = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
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
        </form>
      </>
    );
  }
}
