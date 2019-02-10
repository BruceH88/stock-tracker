import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={(props) => { return <Main /> }} />
          <Route exact path="/login" component={(props) => { return <Login /> }} />
          <Route
            render={() => <h1 className="text-center">Sorry, the page you requested does not exist.
        </h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
