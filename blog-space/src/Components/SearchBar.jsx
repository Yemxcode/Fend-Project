import React from "react";

export default class SearchBar extends React.Component {
  state = {
    author: "",
    order: "",
    topic: "",
    sort_by: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { author, order, topic, sort_by } = this.state;
    this.props.searchArticle(author, order, topic, sort_by);
  };
  render() {
    const { author, order, topic, sort_by } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Author:
            <input
              name="author"
              placeholder="author"
              value={author || ""}
              onChange={this.handleChange}
              noValidate
            />
          </label>
          <label>
            Topic:
            <input
              name="topic"
              placeholder="topic"
              value={topic || ""}
              onChange={this.handleChange}
              noValidate
            />
          </label>
          <select
            onChange={this.handleChange}
            value={sort_by || ""}
            name="sort_by"
            noValidate
          >
            <option value={null}>Select Sort By</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
          <select
            onChange={this.handleChange}
            value={order || ""}
            name="order"
            noValidate
          >
            <option value={null}>Select Order By</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <button>Search</button>
        </form>
      </>
    );
  }
}
