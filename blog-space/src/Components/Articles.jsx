import React from "react";
import * as api from "../Api";
import ArticleList from './ArticleList'
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
      .getArticles()
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


  // componentDidUpdate(pP, pS) {
  //   if Object.values(pS.query)
  // }


  render() {
    const { isLoading, articles, topics, error } = this.state;
    if (isLoading) return <h2>Loading ....</h2>;
    else 
    return (
    <>
    <SearchBar topics={topics} searchArticle={this.searchArticle}/>
    <ArticleList articles={articles} />
    </>);
  }
}
