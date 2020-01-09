import React from "react";
import * as api from "../Api";
import { Link } from "@reach/router";
import ErrorShower from "./ErrorDisplay";
import '../Layouts/Main.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "./LoadingSpinner";
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
    if (isLoading) return <LoadingSpinner />;
    return (
      <ul className="Ul">
        <h2>Authors</h2>
        {users.map(user => (
          <Link to={`/users/${user.username}`}><li className="Li" key={user.username}>
            <span className="user">
              {user.username}
            </span>
            <span className="user_Icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </li></Link>
        ))}
      </ul>
    );
  }
}
