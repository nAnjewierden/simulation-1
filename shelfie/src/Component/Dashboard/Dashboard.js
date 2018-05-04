import React, {Component} from 'react'
import Product from '../Product/Product'


export default class Dashboard extends Component{
    render(){
        
    this.props.inventory.map((ele, id) => {
        console.log(ele, id)
        return <Product/>
        console.log(ele)
    })
        return(
            <Product/>
        )
    }
}