import React from "react";
import * as api from "../Api";
import ArticleList from './ArticleList';
import SearchBar from "./SearchBar";


export default class Articles extends React.Component {
  state = {
    user: "",
    isLoading: true,
    articles: [],
    topics: [],
    error: null,
    query : {}
  };

  componentDidMount() {
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
      api
        .getTopics()
        .then(({ topics }) => this.setState({ topics, isLoading: false }))
        .catch(({ response }) =>
          this.setState({
            error: { status: response.status, msg: response.data },
            isLoading: false
          })
        );

  }


  searchArticle = (author, order, topic, sort_by) => {
    this.setState({ query: { author, order, topic, sort_by } });
  }


  componentDidUpdate(pP, pS) {
    pS.query !== this.state.query &&
      api
        .getArticles(this.state.query)
        .then(({ articles }) => this.setState({ articles, isLoading: false }))
        .catch(({ response }) =>
          this.setState({
            error: { status: response.status, msg: response.data },
            isLoading: false
          })
        );
  }


  render() {
    const { isLoading, articles, topics, error } = this.state;
    if (isLoading) return <h2>Loading ....</h2>;
    else 
    return (
    <>
    <SearchBar topics={topics} searchArticle={this.searchArticle} />
    <ArticleList articles={articles} />
    </>);
  }
}
