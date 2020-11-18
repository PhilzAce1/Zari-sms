import React from 'react';
import 'antd/dist/antd.css';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import { GlobalProvider } from './context/globalContext';

import AuthRoute from './hoc/AuthRoute';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={AuthRoute(Home, false)} />
        <Route exact path="/login" component={AuthRoute(Login, false)} />
        <Route exact path="/signup" component={AuthRoute(Signup, false)} />
        <Route path="/" component={AuthRoute(Main, true)} />
        <Route path="*" component={AuthRoute(Home, false)} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
