import React, { Component } from 'react';
import productData from './productData';

class ProductTable extends Component {
    constructor() {
        super();
        this.productData = productData;
        this.state = {
            productsByCategory: {},
        }
    }
    componentWillMount() {
        this.formatData();
    }
    formatData() {
        var tempProducts = {};
        this.productData.data.map((product) => {
            // console.log(product.category);
            if(tempProducts[product.category] === undefined){
                tempProducts[product.category] = [];
            }
            tempProducts[product.category].push(product); 
        });
        this.setState({
            productsByCategory: tempProducts
        })
    } 
    render() {
        var rows = [];
        for(var key in this.state.productsByCategory){
            console.log(this.state.productsByCategory[key]);
        }
        return ( 
            <div className = "product-table">
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th>Head</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* products go here */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;