import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchBar extends React.Component {
  state = {
    author: null,
    order: null,
    topic: null,
    sort_by: null
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  changeTopic = topic => {
    this.setState({ topic });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { author, order, topic, sort_by } = this.state;
    if (author || order || topic || sort_by || topic === "") {
      this.props.searchArticle(author, order, topic, sort_by);
    }
  };
  render() {
    const { author, order, topic, sort_by } = this.state;
    return (
      <>
        <form className="searchBarForm" onSubmit={this.handleSubmit}>
          
            <input
              name="author"
              placeholder="author"
              value={author || ""}
              onChange={this.handleChange}
              noValidate
              className="searchBarInput"
            />
          
          <select onChange={this.handleChange} value={topic || ""} name="topic">
            <option value="">Select Topic</option>
            {this.props.topics.map(topic => (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            ))}
          </select>
          <select
            onChange={this.handleChange}
            value={sort_by || ""}
            name="sort_by"
          >
            <option disabled value="">Select Sort By</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
          <select onChange={this.handleChange} value={order || ""} name="order">
            <option disabled value="">Select Order By</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <button className="searchBarBtn">
            Search <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </>
    );
  }
}
