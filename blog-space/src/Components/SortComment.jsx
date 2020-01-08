import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
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
          <option disabled value="">Select Sort By</option>
          <option value="author">Author</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </select>
        <select
          onChange={this.handleChange}
          value={order || ""}
          name="order"
        >
          <option disabled  value="">Select Order By</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button className="sortBtn" type="submit">Sort   <FontAwesomeIcon icon={faSyncAlt} className="sort-icon"/></button>
      </form>
    );
  }
}
