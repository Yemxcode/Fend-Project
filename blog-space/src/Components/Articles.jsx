import React from "react";
import * as api from "../Api";
import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import { navigate } from "@reach/router";
import LoadSearch from "./LoadSearch";
import ErrorDisplay from "./ErrorDisplay";
import PaginationNav from "./PaginationNav";

export default class Articles extends React.Component {
  state = {
    isLoading: true,
    articles: [],
    totalCount: 0,
    topics: [],
    error: null,
    maxPage: 1,
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
      .then(({ articles, totalCount }) => this.setState({ articles, totalCount, maxPage
        : Math.ceil(totalCount / 10), isLoading: false }))
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

  changePage = (number) => {
    this.setState(currentState => {
      return {
        ...currentState, query : {
          ...currentState.query, page: number
        }    
      }
    })
  }


  searchArticle = (author, order, topic, sort_by) => {
    this.setState({ query: { author, order, topic, sort_by}})
    topic ? navigate(`/articles/${topic}`) : navigate(`/articles`)
  };

  componentDidUpdate(pP, pS) {
    const { author, order, topic, sort_by, page } = this.state.query;
    if (pS.query.author !== author || pS.query.order !== order || pS.query.topic !== topic || pS.query.sort_by !== sort_by || pS.query.page !== page)
      api
        .getArticles({ author, order, topic, sort_by, page })
        .then(({ articles, totalCount }) => this.setState({
          articles, isLoading: false, error: null, totalCount, maxPage
            : Math.ceil(totalCount / 10) }))
        .catch(({ response }) =>
          this.setState({
            error: { status: response.status, msg: response.data },
            isLoading: false
          })
        );
  }

  render() {
    const { isLoading, articles, topics, error, totalCount, maxPage } = this.state;
    if (isLoading) return <LoadSearch />;
    else
      return (
        <>
          <SearchBar topics={topics} searchArticle={this.searchArticle} />
          {error ? <ErrorDisplay error={error} /> : <>{<><h2>Articles</h2>
            <h3>Total Article count: {totalCount}</h3>{articles.map(article => <ArticleList totalCount={totalCount} key={article.article_id}article={article} />)}</>}<PaginationNav page={this.state.query.page} changePage={this.changePage} maxPage={maxPage} /> </>}
        </>
      );
  }
}
