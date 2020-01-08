import React from 'react';
import * as api from '../Api'
import ErrorDisplay from './ErrorDisplay';
export default class PostUser extends React.Component {
 state = {
  isLoading: false,
  error: null,
  name: '',
  username: '',
  avatarUrl:'',
  postedUser: false
 }

 handleChange = e => {
  const {name, value} = e.target;
  this.setState({[name]: value})
 }

 handleSubmit = e => {
  e.preventDefault()
  const {name, username, avatarUrl} = this.state;
  this.setState({isLoading: true, postedUser: false})
  api.postUser(username, avatarUrl, name).then(res => this.setState({
   name: '',
   username: '',
   avatarUrl: '', isLoading: false, postedUser: true
  })).catch(({ response }) =>
   this.setState({
    error: { status: response.status, msg: response.data },
    isLoading: false
   })); 

 }

 render() {
  const {name, username, avatarUrl, isLoading, error, postedUser} = this.state
  if (isLoading) return <h2>Loading ....</h2>;
  return (
   <>
  {postedUser ? <h2>Successfully Signed Up!</h2> :<>{error && <ErrorDisplay error={error}/>}
   <form className="signUpForm" onSubmit={this.handleSubmit}>
    <label>
     Name:
    <input className="signUpInput" required  name='name' value={name} type="text" onChange={this.handleChange}/>
    </label>
    <label>
     username:
    <input className="signUpInput" value={username} type="text" name='username' required onChange={this.handleChange}/>
    </label>
    <label>
     Avatar url:
    <input className="signUpInput" value={avatarUrl} type="text" name='avatarUrl' onChange={this.handleChange}/>
    </label>
    <button className="signUpBtn" type="submit">Sign Up</button>
   </form></>}

   </>
  )
 }
}