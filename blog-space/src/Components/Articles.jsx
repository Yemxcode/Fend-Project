import React from "react";
import * as api from "../Api";
import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import { navigate } from "@reach/router";
import LoadSearch from "./LoadSearch";
import ErrorDisplay from "./ErrorDisplay";


export default class Articles extends React.Component {
  state = {
    isLoading: true,
    articles: [],
    totalCount: 0,
    topics: [],
    error: null,
    query: {
      author: null,
      order: null,
      topic: null,
      sort_by: null,
      page: 1}
  };

  componentDidMount() {
    api
      .getArticles({
        topic: this.props.topic
      })
      .then(({ articles, totalCount }) => this.setState({ articles, totalCount, isLoading: false }))
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

  searchArticle = (author, order, topic, sort_by, page) => {
    this.setState({ query: { author, order, topic, sort_by, page}})
    topic || topic.length ? navigate(`/articles/${topic}`) : navigate(`/articles`)
  };

  componentDidUpdate(pP, pS) {
    const { author, order, topic, sort_by, page } = this.state.query;
    if (pS.query.author !== author || pS.query.order !== order || pS.query.topic !== topic || pS.query.sort_by !== sort_by || pS.query.page !== page)
      api
        .getArticles({ author, order, topic, sort_by, page })
        .then(({ articles }) => this.setState({ articles, isLoading: false, error: null }))
        .catch(({ response }) =>
          this.setState({
            error: { status: response.status, msg: response.data },
            isLoading: false
          })
        );
  }

  render() {
    const { isLoading, articles, topics, error, totalCount } = this.state;
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
