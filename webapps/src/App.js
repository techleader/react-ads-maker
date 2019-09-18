import React, { Fragment } from 'react';
import { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {

  render() {
    return (
      <div className="App App-header ">        
        
        <BrowserRouter> 
          <Navigation></Navigation>           
          <Switch>      
            <Route path="/" component={Home} exact ></Route>           
            <Route path="/Login" component={Login}></Route>
            <Route path="/SignUp" component={SignUp}></Route>
          </Switch>
        </BrowserRouter> 
        </div>                  
     
    );
  }
}




export default (App);
