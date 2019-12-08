import React from "react";
import * as api from "../Api";
import ErrorShower from "./ErrorShower";

export default class VoteButton extends React.Component {
  state = {
    inc_votes: 0,
    error: null
  };

  handleClick = event => {
    const { name, value } = event.target;
    const { inc_votes } = this.state;
    if (inc_votes === 0)
      this.setState(currentState => {
        return { [name]: currentState[name] + +value };
      });
    else {
      this.setState(currentState => {
        return { [name]: currentState[name] + +(value * 2) };
      });
    }
  };
  componentDidUpdate (pP, pS){
   const { inc_votes } = this.state;
   const votes = {inc_votes}
   pS.in !== this.state.inc_votes &&
     api
       .patchVotes(this.props.commentOrArticle, this.props.id, votes)
       .catch(({ response }) =>
         this.setState({
           error: {
             msg:
               "Error! Sorry cannot process your vote, please try again later ;/"
           },
           isLoading: false,
           inc_votes: 0
         })
       );

    }

  render() {
    const { inc_votes, error } = this.state;
    return (
      <>
        <section>Votes: {inc_votes + this.props.votes}</section>
        {error && <ErrorShower error={error} />}
        <button
          name="inc_votes"
          disabled={inc_votes === 1 ? true : false}
          value={1}
          onClick={this.handleClick}
        >
          Like
        </button>
        <button
          name="inc_votes"
          disabled={inc_votes === -1 ? true : false}
          value={-1}
          onClick={this.handleClick}
        >
          Dislike
        </button>
      </>
    );
  }
}
