import React, { Component } from 'react';
import products from './products';
import Product from './Product';

    class SportingGoods extends Component{
        constructor(){
            super();
            this.products = products;
        }
        render(){
            return(
                <div className="container">
                    <div className="col-sm-4">
                        <h3>Sporting Goods</h3>
                        <Product />
                    </div>
                </div>
            )
        }
    }

export default SportingGoods;