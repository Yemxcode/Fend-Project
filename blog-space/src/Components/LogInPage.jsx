

import React from "react";
import { Context } from "../MyContext";

export default class LogInPage extends React.Component {
  state = {
    username: ""
  };

  render() {
    return (
      <>
        <Context.Consumer>
          {context => (
            <form
              onSubmit={e => {
                e.preventDefault();
                context.logIn(this.state.username);
              }}
            >
              <input
                type="text"
                required
                value={this.state.username}
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
              />

              <button type="submit">Log In</button>
            </form>
          )}
        </Context.Consumer>
      </>
    );
  }
}
