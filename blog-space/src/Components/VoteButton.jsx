import React from "react";
import * as api from "../Api";
import ErrorShower from "./ErrorShower";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import '../Layouts/Main.css';
export default class VoteButton extends React.Component {
  state = {
    inc_votes: 0,
    error: null
  };

  handleClick = event => {
    let { name, value } = event.target; 
    const votes = {inc_votes: value}
      this.setState(currentState => {
        return { [name]: currentState[name] + +value };
      });
   api
     .patchVotes(this.props.commentOrArticle, this.props.id, votes)
     .catch(({ response }) =>
       this.setState((currentState) =>{
         return {error: {
           msg:
             "Error! Sorry cannot process your vote, please try again later ;/"
         },
         isLoading: false,
         [name]: currentState[name] - value}
       })
     );
  };

  render() {
    const { inc_votes, error } = this.state;
    return (
      <div className="btn_container">
        <section>Votes: {inc_votes + this.props.votes}</section>
        {error && <ErrorShower error={error} />}
        <button
          className="btn_like"
          name="inc_votes"
          disabled={inc_votes === 1 ? true : false}
          value={1}
          onClick={this.handleClick}
        >
          Like
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <button
          className="btn_dislike"
          name="inc_votes"
          disabled={inc_votes === -1 ? true : false}
          value={-1}
          onClick={this.handleClick}
        >
          Dislike <FontAwesomeIcon icon={faThumbsDown} />
        </button>
      </div>
    );
  }
}
