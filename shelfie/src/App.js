import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Dashboard from './Component/Dashboard/Dashboard'
import Form from './Component/Form/Form'
import Header from './Component/Header/Header'
import Product from './Component/Product/Product'
import {Switch, Link} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state={
      inventory: [
      {imageUrl: '',name: 'Mona Lisa', price: 1000000},
      {imageUrl: '',name: 'The Scream', price: 2000000},
      {imageUrl: '',name: 'Picasso', price: 3000000}
    ],
    curSel: ''
    }
    
  }
  componentDidMount(){
    axios.get('api/inventory').then(res =>{
      this.setState({
        inventory : res.data
      })
    })
  }
  render() {
    let {inventory}=this.state
    return (
      <div className="App">
        <Link to='/dashboard'>Dashboard</Link>
        <Dashboard inventory={inventory} get={this.componentDidMount}/>
        <Form get={this.componentDidMount} curSel={this.state.curSel}/>
        <Header/>
      </div>
    );
  }
}

export default App;
