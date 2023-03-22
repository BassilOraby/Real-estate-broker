import './App.css';
import React from 'react'
import Nav from './Nav.js';
import HomePage from './HomePage.js'
import Dummy from './Dummy.js'
import BuyPage from './BuyPage.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/dummy' component={Dummy}/>
        <Route path='/buy' component={BuyPage}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
