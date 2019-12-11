import React from 'react';


export const Context = React.createContext();

export default class MyContext extends React.Component {
 state = {
  loggedInAs: 'Guest'
 }

 
 
 render() {
  console.log(this.state.loggedInAs)
  return(
   <Context.Provider value={
    {
     state: this.state,
     logIn:(value) => this.setState({loggedInAs : value})
    }
   }>
   {this.props.children}
  </Context.Provider>
  )
  
 }
}