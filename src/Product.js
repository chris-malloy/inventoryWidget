import React, { Component } from 'react';
import products from './products'

class Product extends Component{
    constructor(){
        super();
        this.products = products
    }
    render(){
        var productsArray = [];
        var sportingGoodsArray = [];
        var electronicsArray = [];
        productsArray = this.products.data.map((products,index)=>{
            if (products.category == 'Sporting Goods'){
                sportingGoodsArray.push(products);
            } else {
                electronicsArray.push(products);
            }
            var colorClass;
            if (products.inStock == true){
                colorClass="text-success";
            }
            else {
                colorClass="text-danger";
            }
            return(
                <div className="container">
                    <div className="col-sm-6">{products.name}</div>
                    <div className="col-sm-6">{products.price}</div>
                </div>
            )
        })
        return(
            {sportingGoodsArray}
        )
    }
};

export default Product