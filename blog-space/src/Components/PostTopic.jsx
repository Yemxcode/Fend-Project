import React from 'react';

export default class PostTopic extends React.Component {
 state = {
  isLoading: true,
  error: null,
  topic: null,
  description: null
 }

 render () {
  return (
    <form>
      <label>
        {" "}
        New Topic:
        <input
          name="newTopic"
          onChange={this.handleChange}
          placeholder="New Topic"
          value={newTopic || ""}
          disabled={topic}
          required
        />
      </label>
      <textarea
        name="description"
        onChange={this.handleChange}
        value={description}
        placeholder="New Topic Description"
        disabled={topic}
      />
    </form>
  );
 }
}