import React from "react";

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
   this.props.postBody(this.state.body)
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
            placeholder="type comments"
          ></textarea>
          <button>Post</button>
        </form>
      </>
    );
  }
}
