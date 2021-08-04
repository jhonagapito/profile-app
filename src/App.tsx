import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./Helpers/ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/home" comp={Dashboard} />
        <Route path="*">
            <Redirect to="/home" />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
