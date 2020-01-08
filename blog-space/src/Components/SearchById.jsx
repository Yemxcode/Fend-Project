import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchById extends React.Component {
  state = {
    id: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchArticle(this.state.id)
  };

  render() {
    const { id } = this.state;
    return (
      <form name="search" onSubmit={this.handleSubmit}>
        <label>
          Search By ID:
          <input
            name="id"
            type="number"
            placeholder="Article ID"
            onChange={this.handleChange}
            value={id}
            className="searchBarInput"
          />
        </label>
        <button className="searchBarBtn" type="submit">
          Search <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    );
  }
}
