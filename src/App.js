import React from 'react'
import './App.css';
import HeaderComponent from './components/header-component/Header.component';
import SideBarComponent from './components/sidebar-component/SideBar.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/chat-component/Chat.component';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
