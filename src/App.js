import React from 'react';
import UsersPage from './users/UsersPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddUser from './users/AddUser'


const App=()=> {

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={AddUser}/>          
          <Route path="/users" exact component={UsersPage}/>
        </Switch>
      </BrowserRouter>
    );
  }


export default App;
