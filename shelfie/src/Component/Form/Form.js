import React, {Component} from 'react'
import axios from 'axios'


export default class Form extends Component{
    constructor(){
        super()
        this.state={
            imageURL: '',
            productName: '',
            price: 0,
        }
        this.handleImageURL=this.handleImageURL.bind(this)
    }
    handleImageURL(value){
        this.setState({
            imageURL: value
        })
    }

    handleProductName(value){
        this.setState({
            productName: value
        })
    }

    handlePrice(value){
        this.setState({
            price: value
        })
    }

    reset(){
        this.setState({
            imageURL: '',
            productName: '',
            price: 0
        })
    }
    create(name, price, imgUrl){
        axios.post('/api/inventory',{name: name, price: price, imgUrl: imgUrl}).then(() => this.props.get())
        this.reset()
    }
    render(){
        return(
            <div>
                <input onChange={(ele) => {this.handleImageUrl(ele.target.value)}}></input>
                <input onChange={(ele) => {this.handleProductName(ele.target.value)}}></input>
                <input onChange={(ele) => {this.handlePrice(ele.target.value)}}></input>
                <button onClick={() => this.reset()}>Cancel</button>
                <button onClick={() => {this.create(this.state.name, this.state.price, this.state.imageURL)}}>Add to Inventory</button>
            </div>
        )
    }
}