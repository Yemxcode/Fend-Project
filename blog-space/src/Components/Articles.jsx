import React from "react";
import * as api from "../Api";
import ArticleList from './ArticleList';
import SearchBar from "./SearchBar";
import LoadingSpinner from './LoadingSpinner';
import {navigate} from '@reach/router';


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
        topic: this.props.topic
      })
      .then(({ articles }) => this.setState({ articles, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          error: { status: response.status, msg: response.data }
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
    this.setState({ query: { author, order, topic, sort_by } });
  }


  componentDidUpdate(pP, pS) {
    if (pS.query !== this.state.query) 
      {api
        .getArticles(this.state.query)
        .then(({ articles }) => this.setState({ articles, isLoading: false }))
        .catch(({ response }) =>
          this.setState({
            error: { status: response.status, msg: response.data },
            isLoading: false
          })
        );
        navigate(`/articles/${this.state.query.topic}`);}
  }


  render() {
    const { isLoading, articles, topics} = this.state;
    if (isLoading) return <LoadingSpinner/>
    else 
    return (
    <>
    <SearchBar topics={topics} searchArticle={this.searchArticle} />
    <ArticleList articles={articles} />
    </>);
  }
}
