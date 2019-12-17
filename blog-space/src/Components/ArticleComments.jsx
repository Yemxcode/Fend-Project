import React from "react";
import * as api from "../Api";
import CommentsForm from "./CommentsForm";
import SortComment from "./SortComment";
import FormatComments from "./FormatComments";
import LoadingSpinner from "./LoadingSpinner";
export default class ArticleComments extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    error: null,
    query: null
  };

  componentDidMount() {
    api
      .getComments(this.props.id)
      .then(({ comments }) => this.setState({ comments, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          error: { msg: response.data },
          isLoading: false
        })
      );
  }

  commentSorter = query => {
    api
      .getComments(this.props.id, query)
      .then(({ comments }) => this.setState({ comments, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          error: { msg: response.data },
          isLoading: false
        })
      );
  };

  postBody = (body, username) => {
    api
      .postComment(this.props.id, username, body)
      .then(({ comment }) =>
        this.setState(currentState => {
          return {
            comments: [comment, ...currentState.comments]
          };
        })
      )
      .catch(({ response }) =>
        this.setState({
          error: {
            msg:
              "Error! Sorry cannot post this comment, please try again later ;/ "
          },
          isLoading: false
        }))

  };

  deleteComment = id => {
    this.setState(currentState => {
      return {
        comments: currentState.comments.filter(
          comment => comment.comment_id !== id
        )
      };
    });
    api.deleteCommentById(id).catch(({ response }) =>
      this.setState({
        error: {
          msg:
            "Error! Sorry cannot delete this post, please try again later ;/ "
        },
        isLoading: false
      })
    );
  };

  render() {
    const { comments, isLoading, error} = this.state;
    if (isLoading) return <LoadingSpinner />;
    return (
      <div>
        <CommentsForm postBody={this.postBody} />
        <section>
          <SortComment commentSorter={this.commentSorter} />
          <FormatComments
            comments={comments}
            error={error}
            deleteComment={this.deleteComment}
          />
        </section>
      </div>
    );
  }
}
