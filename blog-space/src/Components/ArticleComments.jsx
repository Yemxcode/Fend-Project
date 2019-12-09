import React from "react";
import * as api from "../Api";
import CommentsForm from "./CommentsForm";
import SortComment from "./SortComment";
import FormatComments from "./FormatComments";

export default class ArticleComments extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    username: "tickle122",
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

  // componentDidUpdate(prevProps, prevState) {
  //   const { username, body } = this.state;
  //   prevState.body !== this.state.body &&
  //     api
  //       .postComment(this.props.id, username, body)
  //       .then(({ comment }) =>
  //         this.setState(currentState => {
  //           return {
  //             comments: [comment, ...currentState.comments],
  //             body: ""
  //           };
  //         })
  //       )
  //       .catch(({ response }) =>
  //         this.setState({
  //           error: {
  //             msg:
  //               "Error! Sorry cannot post this comment, please try again later ;/ "
  //           },
  //           isLoading: false
  //         })
  //       );
  // }

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

  postBody = body => {
   const { username} = this.state;
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
        })
      );
  };

  // componentDidUpdate(prevProps, prevState) {
  //   prevState.query !== this.state.query &&
  //     api
  //       .getComments(this.props.id, this.state.query)
  //       .then(({ comments }) => this.setState({ comments, isLoading: false }))
  //       .catch(({ response }) =>
  //         this.setState({ error: { msg: response.data }, isLoading: false })
  //       );
  // }

  // handleSubmit = event => {
  //   const { username, body } = this.state;
  //   event.preventDefault();
  //   api
  //     .postComment(this.props.id, username, body)
  //     .then(({ comment }) =>
  //       this.setState(currentState => {
  //         return { comments: [comment, ...currentState.comments], body: "" };
  //       })
  //     )
  //     .catch(({ response }) =>
  //       this.setState({
  //         error: {
  //           msg:
  //             "Error! Sorry cannot post this comment, please try again later ;/ "
  //         },
  //         isLoading: false
  //       })
  //     );
  // };

  deleteComment = id => {
    this.setState(currentState => {
      return {
        comments: currentState.comments.filter(comment => comment.comment_id !== id)
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
    const { comments, isLoading, username, error } = this.state;
    if (isLoading) return <h2> Loading... </h2>;
    return (
      <div>
        <CommentsForm postBody={this.postBody} />
        <section>
          <SortComment commentSorter={this.commentSorter} />
          <FormatComments
            comments={comments}
            username={username}
            error={error}
            deleteComment={this.deleteComment}
          />
        </section>
      </div>
    );
  }
}

//pass id, get comments on mount, <form /> pass function, when comments are posted send it to state and setState and render using that comment, pushing it to the front of the array.

//deleting the comments

//fetching comments, every comment has a like button. Then can sort the comments from oldest to newest which should be on the componentDidUpdate, two different options one for sort and the other for the comments
