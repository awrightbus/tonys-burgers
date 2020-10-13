import React from 'react';
import './App.css';
import Header from './components/Header'
import HomePage from './components/HomePage'
import  MobileNav from './components/MobileNav'


function App() {
  return (
    <div className="app">
        <Header />
        <HomePage />
        <MobileNav />
    </div>
  );
}

export default App;
