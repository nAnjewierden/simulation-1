import React, {Component} from 'react'
import Product from '../Product/Product'


export default class Dashboard extends Component{
    render(){
        
    this.props.inventory.map((ele, id) => {
        //console.log(ele, id)
        <h2><Product name={ele.name}/></h2>
        console.log(ele, ele.name)
    })
        return(
            <Product/>
        )
    }
}