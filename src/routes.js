import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import Main from './pages/Main'
import Cart from './pages/Cart'


export default function Routes() {
    return(
      <Switch>
        
          <Route path="/" component={Main} exact></Route>
          <Route path="/cart" component={Cart}></Route>
        
      </Switch>
    )
}