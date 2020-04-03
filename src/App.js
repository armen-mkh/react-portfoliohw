import React from 'react';
import {BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Intro from './pages/Intro';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Route exact path='/' component={Intro}/>
      <Route exact path='/portfolio' component ={Portfolio}/>
    </div>
    </Router>
    
  );
}

export default App;
