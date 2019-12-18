import React from "react";
import * as api from "../Api";
import { Context } from "../MyContext";
import ErrorDisplay from './ErrorDisplay'


export default class PostArticle extends React.Component {
  state = {
    isLoading: true,
    topics: [],
    topic: '',
    title: '',
    body: '',
    articlePosted: false,
    error: null
  };

  componentDidMount() {
    api.getTopics().then(({ topics }) => this.setState({ topics, isLoading: false })).catch(({ response }) =>
      this.setState({
        error: { status: response.status, msg: response.data },
        isLoading: false
      }));
  }

  

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  componentDidUpdate(pP) {
    pP.topicUpdate !== this.props.topicUpdate && 
      api.getTopics().then(({ topics }) => this.setState({ topics, isLoading: false })).catch(({ response }) =>
        this.setState({
          error: { status: response.status, msg: response.data },
          isLoading: false
        })); 
  }

  handleSubmit = (username) => {
    const {refresh} = this.props;
   this.setState({isLoading: true, error: null, articlePosted: false})
   const {body, topic, title} = this.state;
   api
     .postArticle(username, body, topic, title)
     .then(res => {this.setState({topic: '', body: '', title: '', isLoading: false, articlePosted: true}); refresh() })
     .catch(({ response }) =>
       this.setState({
         error: { msg: 'Unfortunately unable to post this article at this moment, please try again later :/' },
         isLoading: false
       })
     );
  }

  render() {
    const { topics, topic, newTopic, title, body, isLoading, error, articlePosted } = this.state;
    if (isLoading) return <h2> Loading ...</h2>;
    return (
      <>
      {error && <ErrorDisplay error={error}/>}
      {articlePosted && <p>Article successfully posted!</p>}
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
              value={topic}
              name="topic"
              required
            >
              <option disabled value="">Select Topic</option>
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
      </>
    );
  }
}
