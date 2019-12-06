import React from "react";
import * as api from "../Api";

export default class Articles extends React.Component {
  state = {
    user: "",
    articles: [],
    error: null

  };

  componentDidMount() {
    api
      .getArticles()
      .then(({ articles }) =>
        this.setState({ articles, isLoading: false })
      )
      .catch(({ response }) =>
        this.setState({
          error: { status: response.status, msg: response.data },
          isLoading: false
        })
      );
  }

  render() {
    return <></>;
  }
}
