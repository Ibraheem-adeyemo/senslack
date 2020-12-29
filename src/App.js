<<<<<<< HEAD
import React, {useState} from 'react'
=======
import React from 'react'
>>>>>>> 4807a547fc81be0c11abf5fbab335f3d328cbb06
import './App.css';
import HeaderComponent from './components/header-component/Header.component';
import SideBarComponent from './components/sidebar-component/SideBar.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/chat-component/Chat.component';
<<<<<<< HEAD
import Login from './components/authentication/Login/Login.component';
import { useStateValue } from './components/stateProvider/AuthStateProvider';
=======
>>>>>>> 4807a547fc81be0c11abf5fbab335f3d328cbb06

function App() {
  const { state, dispatch} = useStateValue();
  console.log(state, 'app js')
  return (
    <Router>
<<<<<<< HEAD
      {
        !state.user?(
          <Login />
        ):(
          <>
            <div className="App">
              <HeaderComponent />
              <div className="app_body">
                <SideBarComponent />
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        )
      }
=======
      <div className="App">
        <HeaderComponent />
        <div className="app_body">
          <SideBarComponent />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
      </div>
>>>>>>> 4807a547fc81be0c11abf5fbab335f3d328cbb06
    </Router>
  );
}

export default App;
