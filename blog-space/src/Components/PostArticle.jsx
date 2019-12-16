import React from "react";
import * as api from "../Api";
import { Context } from "../MyContext";

export default class PostArticle extends React.Component {
  state = {
    isLoading: true,
    topics: [],
    topic: null,
    title: '',
    body: "",
    error: null
  };

  componentDidMount() {
    api.getTopics().then(({ topics }) => this.setState({ topics }));
  }

  handleSubmit = () => {};

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (username) => {
   this.setState({isLoading: true})
   const {body, topic, title} = this.state;
   api
     .postArticle(username, body, topic, title)
     .then(res => this.setState({}))
     .catch(({ response }) =>
       this.setState({
         error: { msg: response.data },
         isLoading: false
       })
     );
  }

  render() {
    const { topics, topic, newTopic, description, title, body } = this.state;
    return (
      <Context.Consumer>
        {context => (
          <form
            onSubmit={e => {
              e.preventDefault();
                this.handleSubmit(context.state.loggedInAs);
            }}
          >
            <select
              disabled={newTopic}
              onChange={this.handleChange}
              value={topic || ""}
              name="topic"
              required
            >
              <option value={""}>Select Topic</option>
              {topics.map(topic => (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              ))}
            </select>
            <input
              name="title"
              onChange={this.handleChange}
              value={title}
              placeholder="Title"
              required
            />
            <textarea
              name="body"
              onChange={this.handleChange}
              value={body}
              placeholder="Article Body"
              required
            />
            <button type="submit">Post</button>
          </form>
        )}
      </Context.Consumer>
    );
  }
}
