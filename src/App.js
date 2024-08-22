import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/action';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <Dashboard></Dashboard>
    </div>
  );
}

export default App;
