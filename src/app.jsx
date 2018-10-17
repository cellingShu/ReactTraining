import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store'
import { HashRouter, Switch, Route } from 'react-router-dom'
import ToDoList from './containers/ToDoList'


ReactDOM.render(
  <Provider store={store} >
    <HashRouter>
      <Switch>
        <Route exact path='/todoList' render={()=><ToDoList/>}/>
      </Switch>
    </HashRouter>
  </Provider>,
  
  document.getElementById('app')
);