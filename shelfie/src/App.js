import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard'
import Form from './Component/Form/Form'
import Header from './Component/Header/Header'
import Product from './Component/Product/Product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard><Product/></Dashboard>
        <Form/>
        <Header/>
      </div>
    );
  }
}

export default App;
