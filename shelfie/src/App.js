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
        <Dashboard inventory={inventory}/>
        <Form get={this.componentDidMount}/>
        <Header/>
      </div>
    );
  }
}

export default App;
