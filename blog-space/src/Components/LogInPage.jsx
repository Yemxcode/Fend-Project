import React from 'react';
import { Context } from '../MyContext';

export default class LogInPage extends React.Component {
 state = {
  username: ''
 }


 // handleSubmit = (event) => {
 //  event.preventDefault();
 //  console.dir(event.target)
 // }

//  {(context) => (<><p>i'm in side the consumer {context.state.loggedInAs}</p>
//   <input type="text" onChange={context.logIn} /></>)}

// </Context.Consumer>
// (context) => (context.logIn(this.state.username))
// (context) => (context.logIn(this.state.username))
//  < Context.Consumer >
 render () {
  
  return (
 <>
  <Context.Consumer>
     {(context) => (
      <form onSubmit={() => context.logIn(this.state.username)} >
    <input type="text" required value={this.state.username} onChange={event => this.setState({username: event.target.value})}/>
    
    <button type="submit">Log In</button>
   </form>
     )}
    
   </Context.Consumer>
   </>
  )
 }


}