import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import inputs from './components/Inputs';
import Button  from './components/button';
import LoginForm from './components/LoginForm';
import Login from './components/signin/login'
import Routes  from '../src/route';
import SignInOutContainer from './components/container';
import DataTable from './components/device-list/devicelist';





function App() {

  return (
    // <DataTable />
     <Router>
     <Switch>
     <Route exact path="/">
       <SignInOutContainer />
    </Route>
  <Route path="/Navbar">
      <Navbar />
    </Route>
    <Route path = "/LoginForm " children>
      <LoginForm />
    </Route> 
   </Switch>
 </Router>

    

  );
}

export default App;