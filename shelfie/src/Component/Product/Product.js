import React, {Component} from 'react'



export default function Product(params){

console.log(params.inventory)
        return(
            <div>s
                <img src={params.img}/>
                <div>Name: {params.name}</div>
                <div>Price: {params.price}</div>
            </div>
        )
    }
