import React, { Component } from 'react';
import './App.scss';

import Header from './components/header';
import Main from './components/main';
import MyProvider from './components/MyProvider'

class App extends Component {
  
  render(){
    return (
      <MyProvider>
     
      <div style={{ textAlign: 'center' }}>
        <Header />
        <Main />
      </div>
      
      </MyProvider>
    
    )
   
  }
  
   
  
}

export default App;
