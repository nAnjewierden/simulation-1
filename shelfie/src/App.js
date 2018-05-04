import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard'
import Form from './Component/Form/Form'
import Header from './Component/Header/Header'
import Product from './Component/Product/Product'

class App extends Component {
  constructor(){
    super()
    this.state={
      inventory: [
      {imageUrl: '',name: 'Mona Lisa', price: 1000000},
      {imageUrl: '',name: 'The Scream', price: 2000000},
      {imageUrl: '',name: 'Picasso', price: 3000000}
    ]
    }
  }
  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory}/>
        <Form/>
        <Header/>
      </div>
    );
  }
}

export default App;
