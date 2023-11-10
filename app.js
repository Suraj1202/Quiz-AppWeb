import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Quiz from './Quiz';
import Result from './Result';

const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    setToken('');
  };

  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegistrationForm} />
        <Route
          path="/login"
          render={(props) => <LoginForm {...props} onLogin={handleLogin} />}
        />
        <PrivateRoute path="/quiz" component={Quiz} token={token} onLogout={handleLogout} />
        <PrivateRoute path="/result" component={Result} token={token} onLogout={handleLogout} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, token, onLogout, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      token ? (
        <Component {...props} onLogout={onLogout} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default App;
