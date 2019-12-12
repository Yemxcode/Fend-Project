import React from 'react';


export const Context = React.createContext();

export default class MyContext extends React.Component {
 state = {
  loggedInAs: ''
 }
 
 
 render() {
  console.log(this.state.loggedInAs)
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


// import React, { useState, createContext } from 'react';


// export const Context = React.createContext();

// export const MyContext = props => {
//   const [user, setUser] = useState([{ username: '' }]);


//   return (
//     <Context.Provider value={[user, setUser]}>
//       {props.children}
//     </Context.Provider>
//   )
// }