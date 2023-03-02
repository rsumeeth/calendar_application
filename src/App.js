import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./firebase/Auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Signup} />
        <Route path="/dashboard" component={Layout}>
          <Route exact path="/dashboard" component={Dashboard} />
        </Route>
      </Router>
    </AuthProvider>
  );
}

export default App;
