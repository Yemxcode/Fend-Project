import React from "react";
import * as api from "../Api";
import { navigate } from "@reach/router";
import SearchById from "./SearchById";
import FormatArticle from "./FormatArticle";
import ArticleComments from "./ArticleComments";
import LoadSearch from "./LoadSearch";
import ErrorDisplay from "./ErrorDisplay";

export default class SingleArtist extends React.Component {
  state = {
    isLoading: true,
    article: {},
    error: null,
    notShow: false,
    articleDeleted: false
  };

  componentDidMount() {
    api
      .getArticleById(this.props.id)
      .then(({ article }) => this.setState({ article, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          error: { msg: response.data },
          isLoading: false
        })
      );
  }

  searchArticle = id => {
    navigate(`/articles/id/${id}`);
  };

  componentDidUpdate(prevProps) {
    prevProps.id !== this.props.id &&
      api
        .getArticleById(this.props.id)
        .then(({ article }) => this.setState({ article, isLoading: false, error: null }))
        .catch(({ response }) =>
          this.setState({
            error: { msg: response.data },
            isLoading: false
          })
        );

  }

  deleteArticle = id => {
    api
      .deleteArticleById(id)
      .then(() => this.setState({ articleDeleted: true, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          error: {
            msg:
              "Unfortunately unable to delete article, please try again later"
          },
          isLoading: false
        })
      );
  };

  render() {
    const {
      isLoading,
      article,
      error,
      notShow,
      articleDeleted
    } = this.state;
    let showLabel = notShow ? "Show Comments" : "Hide Comments";
    if (isLoading) return <LoadSearch />;
    if (articleDeleted) return <h2>Article Deleted</h2>;
    else
      return (
        <>
        
        
          <SearchById searchArticle={this.searchArticle} />
          {error ? <ErrorDisplay error={error}/> : 
          <>
          <FormatArticle
            error={error}
            article={article}
            deleteArticle={this.deleteArticle}
          />
          {!error && (
            <button className="showBtn" onClick={() => this.setState({ notShow: !notShow })}>
              {showLabel}
            </button>
          )}
          {!notShow && <ArticleComments id={this.props.id} />}</>}
          
        </>
      );
  }
}
