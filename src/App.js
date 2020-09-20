import React from 'react';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Sign from './components/Sign';
import Log from './components/Log';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <h1> Pre-Mest Weather App </h1>
        <div className='navbar'>
          <div className='menu'>
            <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to='/signup'> Sign Up </Link>
            <Link to='/login'> Log In </Link>
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/signup' component={Sign}/>
          <Route exact path='/login'component={Log}/>
        </Switch>
      </BrowserRouter>
  </div>
  );
}

export default App;