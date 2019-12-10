import React from 'react';
import * as api from '../Api'

export default class GetTopics extends React.Component {
                 state = {
                   topics: [],
                   topic: "",
                   error: null
                 };

                 componentDidMount() {
                   api
                     .getTopics()
                     .then(({ topics }) => this.setState({ topics }))
                     .catch(({ response }) =>
                       this.setState({
                         error: { status: response.status, msg: response.data }
                       })
                     );
                 }

                 handleChange = event => {
                   const { name, value } = event.target;
                   this.setState({ [name]: value });
                   this.props.changeTopic(value)
                 };

                 render() {
                   const { topic, topics } = this.state;
                   return (
                     <select
                       disabled={this.props.newTopic}
                       onChange={this.handleChange}
                       value={topic || ""}
                       name="topic"
                     >
                       <option value={null}>Select Topic</option>
                       {topics.map(topic => (
                         <option key={topic.slug} value={topic.slug}>
                           {topic.slug}
                         </option>
                       ))}
                     </select>
                   );
                 }
               }