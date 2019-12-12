import React from "react";
import * as api from "../Api";
import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import { navigate } from "@reach/router";
import LoadSearch from "./LoadSearch";
import ErrorDisplay from "./ErrorDisplay";


export default class Articles extends React.Component {
  state = {
    user: "",
    isLoading: true,
    articles: [],
    topics: [],
    error: null
  };

  componentDidMount() {
    api
      .getArticles({
        topic: this.props.topic
      })
      .then(({ articles }) => this.setState({ articles, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          error: { status: response.status || 404, msg: response.data }
        })
      );
    api
      .getTopics()
      .then(({ topics }) => this.setState({ topics, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          error: { status: response.status, msg: response.data }
        })
      );
  }

  searchArticle = (author, order, topic, sort_by) => {
    api
      .getArticles({ author, order, topic, sort_by })
      .then(({ articles }) => this.setState({ articles, isLoading: false, error: null }))
      .catch(({ response }) =>
        this.setState({
          error: { status: response.status, msg: response.data },
          isLoading: false
        })
      );
    navigate(`/articles/${topic}`);
  };

  render() {
    const { isLoading, articles, topics, error } = this.state;
    if (isLoading) return <LoadSearch />;
    else
      return (
        <>
          <SearchBar topics={topics} searchArticle={this.searchArticle} />
          
          {error ? <ErrorDisplay error={error}/> :<ArticleList articles={articles} />}
        </>
      );
  }
}
