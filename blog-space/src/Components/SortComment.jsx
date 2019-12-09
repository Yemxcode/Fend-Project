import React from "react";

export default class SortComment extends React.Component {
  state = {
    order: null,
    sort_by: null
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
   event.preventDefault()
    this.props.commentSorter(this.state);
  };

  render() {
   const {sort_by, order} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <select
          onChange={this.handleChange}
          value={sort_by || ""}
          name="sort_by"
        >
          <option value={null}>Select Sort By</option>
          <option value="author">Author</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </select>
        <select
          onChange={this.handleChange}
          value={order || ""}
          name="order"
        >
          <option value={null}>Select Order By</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button>Sort</button>
      </form>
    );
  }
}