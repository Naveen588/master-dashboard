import React from 'react';
// import Footer from './views/test';
// import Home from './views/Layout/Landing'
import Login from './components/signin/login'
// import CustomerBase from './views/Customer/BaseInfo'
// import Dashboard from './views/Reports/Dashboard'
// import VR from './views/Vehicle Registration/VR';
// import VehicleSearch from './views/Vehicle Registration/VehicleSearch';
// import VehicleRegistration from './views/Vehicle Registration/VehicleRegistration';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Inputs from './components/Inputs'



const Routes = [
  { path: '/', exact:true, name: 'login', component : Login },
  { path: '/Navbar', exact:true, name: 'navbar', component : Navbar },
  { path: '/inputs', exact:true, name: 'inputs', component : Inputs }
  
  
  
];

export default Routes;
