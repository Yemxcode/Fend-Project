import React from "react";
import * as api from "../Api";
import { navigate } from "@reach/router";
import SearchById from "./SearchById";
import FormatArticle from './FormatArticle';
import ArticleComments from "./ArticleComments";
export default class SingleArtist extends React.Component {
  state = {
    isLoading: true,
    article: {},
    error: null,
    notShow: false
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
    navigate(`/articles/${id}`);
  };

  componentDidUpdate(prevProps) {
    prevProps.id !== this.props.id &&
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

  render() {
   const {isLoading, article, error, notShow} = this.state;
   let showLabel = notShow ? "Show Comments" : "Hide Comments";
   if (isLoading) return (<h2> Loading....</h2>) 
   else 
    return (
      <>
        <SearchById searchArticle={this.searchArticle} />
        <FormatArticle article={article} />
        {!error && (
          <button onClick={() => this.setState({ notShow: !notShow })}>
            {showLabel}
          </button>
        )}
        {!notShow && <ArticleComments id={this.props.id} />}
      </>
    );
  }
}
