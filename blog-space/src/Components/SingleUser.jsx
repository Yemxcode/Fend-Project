import React from "react";
import * as api from "../Api";
import { Link } from "@reach/router";
import ErrorShower from "./ErrorShower";


export default class SingleUser extends React.Component {
  state = {
    isLoading: true,
    user: {},
    articles: [],
    error: null
  };

  componentDidMount() {
    api
      .getUser(this.props.username)
      .then(({ user }) => this.setState({ user, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          error: { status: response.status, msg: response.data },
          isLoading: false
        })
      );
    api
      .getArticles({
        author: this.props.username,
        order: null,
        topic: null,
        sort_by: null
      })
      .then(({ articles }) => this.setState({ articles, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          error: { status: response.status, msg: response.data },
          isLoading: false
        })
      );
  }

  render() {
    const { isLoading, user, articles, error } = this.state;

    if (error) return <ErrorShower error={error} />;
    if (isLoading) return <h2>Loading ...</h2>;
    return (
      <>
        <section>
          <p>username: {user.username}</p>
          <p>name: {user.name}</p>
          <img src={user.avatar_url} alt="chosen profile avatar"></img>
          <ul>
            Articles:
            {articles.map(article => (
              <li key={article.article_id}>
                {" "}
                <Link to={`/article_search/${article.article_id}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul> 
        </section>
      </>
    );
  }
}
