import React from "react";
import * as api from "../Api";
import { Link } from "@reach/router";
import ErrorShower from "./ErrorShower";


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
      <div>
        <h2>Authors</h2>
        <ul>
          {users.map(user => (
            <li key={user.username}>
              <span className="user">
                <Link to={`/users/${user.username}`}>{user.username}</Link>
              </span>{" "}
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
