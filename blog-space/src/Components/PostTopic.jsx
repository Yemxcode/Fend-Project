import React from 'react';
import * as api from '../Api'
import ErrorDisplay from './ErrorDisplay'
export default class PostTopic extends React.Component {
 state = {
  isLoading: false,
  error: null,
  topic: '',
  description: '',
  topicPosted: false
 }

 handleChange = e => {
  const {value, name} = e.target;
  this.setState({[name]: value})
 }

 handleSubmit = e => {
   e.preventDefault();
   const {refreshTopic} = this.props
   this.setState({isLoading: true, topicPosted: false})
   const {topic, description} = this.state;
   api.postTopic(description, topic).then(res => { this.setState({ topicPosted: true, topic: '', description: '', isLoading: false }); refreshTopic()}).catch(({ response }) => this.setState({ error: { status: response.status, msg: response.data }, isLoading: false}))
 }
 render () {
   const {topic, description, error, topicPosted, isLoading} = this.state;
   if (isLoading) return <h2> Loading ...</h2>;
  return (
  <>
    { error && <ErrorDisplay error={error} />}
    { topicPosted && <p>Topic successfully added!</p> }
      <form className="signUpForm" onSubmit={this.handleSubmit}>
      <label>
        {" "}
        New Topic:
        <input
          name="topic"
          type="text"
          onChange={this.handleChange}
          placeholder="New Topic"
          value={topic}
          required
          className="signUpInput"
          
        />
      </label>
      <textarea
        name="description"
        onChange={this.handleChange}
        value={description}
        placeholder="New Topic Description"
        required
        className="signUpInput"
        type="text"
      />
        <button className="signUpBtn" type="submit">Add new topic</button>
    </form> 
    </>
  );
 }
}