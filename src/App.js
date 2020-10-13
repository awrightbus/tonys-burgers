import React from 'react';
import './App.css';
import Header from './components/Header'
import HomePage from './components/HomePage'
import  MobileNav from './components/MobileNav'
import SignIn from './components/SignIn'
import Error from './components/Error'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="app">

        <Header />
      <Router>
        <Switch>
          <Route path="/"  component={HomePage} exact/>

          <Route path='/signin' component={SignIn}/> 

          <Route component={Error}/>

        </Switch>
        
      </Router>  
        

        <MobileNav />
    </div>
  );
}

export default App;
