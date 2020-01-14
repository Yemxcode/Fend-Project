import React from 'react';


export const Context = React.createContext();

export default class MyContext extends React.Component {
 state = {
  loggedInAs: null
 }
 
 componentDidMount() {
       if (localStorage.loggedUser !== "null")
       this.setState({loggedInAs: localStorage.loggedUser})
 }
 componentDidUpdate = (pP, pS) => {
       if (pS.loggedInAs !== this.state.loggedInAs){
             localStorage.setItem('loggedUser', this.state.loggedInAs )
       }
 }
 
 render() {
  return(
   <>
   <Context.Provider value={
    {
     state: this.state,
          logIn: (value) => { this.setState({ loggedInAs: value})}
    }
    
   }>
   {this.props.children}
  </Context.Provider>
   
   </>
  )
  
 }
}




