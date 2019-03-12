import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import ProjectList from './components/projects/list'
import ProjectAdd from './components/projects/add'
import ProjectShow from './components/projects/show'
import ProjectEdit from './components/projects/edit'

import UserList from './components/users/list'
import UserAdd from './components/users/add'
import UserShow from './components/users/show'
import UserEdit from './components/users/edit'

import Dashboard from './components/dashboard/index'

class App extends Component {
 
  render() {
    return (
      <BrowserRouter> 
        <div>
          <h2>Taskbox</h2>
          <ul>
            <li><Link to="/"> Dashboard </Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/users"> Users </Link></li>
          </ul>

          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/projects" component={ProjectList} exact />
            <Route path="/projects/new" component={ProjectAdd} exact />
            <Route path="/projects/:id" component={ProjectShow} exact />
            <Route path="/projects/edit/:id" component={ProjectEdit} exact />

            <Route path="/users" component={UserList} exact/>
            <Route path="/users/new" component={UserAdd} exact/>
            <Route path="/users/:id" component={UserShow} exact />
            <Route path="/users/edit/:id" component={UserEdit} exact />
          </Switch>
         
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
