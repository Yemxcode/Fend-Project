import React from "react";
import * as api from "../Api";
import { Link } from "@reach/router";
import ErrorShower from "./ErrorDisplay";
import Time from "./Time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faCode,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "./LoadingSpinner";
import PostArticle from "./PostArticle";
import { Context } from "../MyContext";
import PostTopic from "./PostTopic";

export default class SingleUser extends React.Component {
  state = {
    isLoading: true,
    user: {},
    articles: [],
    update: false,
    topicUpdate: false,
    error: null
  };

  componentDidMount() {
    api
      .getUser(this.props.username)
      .then(({ user }) =>
        this.setState({ user, isLoading: false, error: null })
      )
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

  refresh = () => {
    this.setState(currentState =>{ return {update: !currentState.update}})
    
  }
  refreshTopic = () => {
    this.setState(currentState => { return { topicUpdate: !currentState.topicUpdate } })
  };

  componentDidUpdate (pP, pS) {
    if (pS.update !== this.state.update || pP.username !== this.props.username){
      api
        .getUser(this.props.username)
        .then(({ user }) =>
          this.setState({ user, isLoading: false, error: null })
        )
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
      );}
  }

  render() {
    const { isLoading, user, articles, error, topicUpdate } = this.state;

    if (error) return <ErrorShower error={error} />;
    if (isLoading) return <LoadingSpinner />;
    return (
      <>
        <section>
          <img src={user.avatar_url} alt="chosen profile avatar"></img>
          <h2>Username: {user.username}</h2>
          <h2>Name: {user.name}</h2>
          <Context.Consumer>
            {context =>
              context.state.loggedInAs === user.username && (
                <div className="postContainer">
                  <PostTopic refreshTopic={this.refreshTopic} />
                  <PostArticle
                    topicUpdate={topicUpdate}
                    refresh={this.refresh}
                  />
                </div>
              )
            }
          </Context.Consumer>
          {articles.length && (
            <ul className="Ul">
              <h3>Articles</h3>
              {articles.map(article => (
                <Link
                  to={`/articles/id/${article.article_id}`}
                  key={article.article_id}
                >
                  <li className="Li">
                    {" "}
                    <section className="user_articles">{article.title}</section>
                    <p>
                      Created: <Time time={article.created_at} />
                    </p>
                    <div className="icon">
                      {article.topic === "cooking" && (
                        <FontAwesomeIcon icon={faHamburger} />
                      )}
                      {article.topic === "football" && (
                        <FontAwesomeIcon icon={faFutbol} />
                      )}
                      {article.topic === "coding" && (
                        <FontAwesomeIcon icon={faCode} />
                      )}
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </section>
      </>
    );
  }
}
