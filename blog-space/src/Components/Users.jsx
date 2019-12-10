import React from "react";
import * as api from "../Api";
import { Link } from "@reach/router";
import ErrorShower from "./ErrorShower";
import '../Layouts/List.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default class Users extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };
  componentDidMount() {
    api
      .getUsers()
      .then(({ users }) => this.setState({ users, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          error: { status: response.status, msg: response.data },
          isLoading: false
        })
      );
  }

  render() {
    const { users, isLoading, error } = this.state;
    if (error) return <ErrorShower error={error} />;
    if (isLoading) return <h2>Loading ...</h2>;
    return (
      <ul className="Ul">
        <h2>Authors</h2>
        {users.map(user => (
          <li className="Li" key={user.username}>
            <Link to={`/users/${user.username}`}>{user.username}</Link>
            <span className="userSpan">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
