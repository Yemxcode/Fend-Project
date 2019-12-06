import React from "react";
import * as api from "../Api";
import ArticleList from './ArticleList'

export default class Articles extends React.Component {
  state = {
    user: "",
    isLoading: true,
    articles: [],
    error: null
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
  }

  render() {
    const { isLoading, articles, error } = this.state;
    if (isLoading) return <h2>Loading ....</h2>;
    else 
    return (
    <>
    <ArticleList articles={articles} />
    </>);
  }
}
