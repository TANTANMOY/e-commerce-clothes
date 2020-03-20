import React from 'react';
import './App.css';
import Home from './pages/homepage/home'
import {Route,Switch} from 'react-router-dom'
import Shop from './pages/homepage/shop/shop'
import Header from './components/header/header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/shop' component={Shop} />
      </Switch>
    
    </div>
  );
}

export default App;
