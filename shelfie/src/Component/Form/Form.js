import React, {Component} from 'react'


export default class Form extends Component{
    constructor(){
        super()
        this.state={
            imageURL: '',
            productName: '',
            price: 0
        }
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
    render(){
        return(
            <div>
                <input onChange={(ele) => {this.handleImageUrl(ele.target.value)}}></input>
                <input onChange={(ele) => {this.handleProductName(ele.target.value)}}></input>
                <input onChange={(ele) => {this.handlePrice(ele.target.value)}}></input>
                <button onClick={() => this.reset()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}