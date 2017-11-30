import React, { Component } from 'react';
import productData from './productData';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    constructor() {
        super();
        // safe internal instance variables
        this.safeProductData = Object.assign({}, productData)
        this.productData = productData;
        this.state = {
            productsByCategory: {},
        }
    }

    // ensure formData runs before render
    componentWillMount() {
        this.formatData();
    }

    componentWillReceiveProps(newProps){
        const searchTerm = newProps.searchTerm.toLowerCase();
        var tempProducts = [];
        this.safeProductData.data.map((item)=>{
            const itemName = item.name.toLowerCase();
            if(itemName.indexOf(searchTerm) != -1){
                tempProducts.push(item)
            }
        });
        this.productData.data = tempProducts;
        this.formatData();
    };

    formatData() {
        var tempProducts = {};
        this.productData.data.map((product) => {
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
            rows.push(<ProductCategoryRow key={key} header={key} />)
            this.state.productsByCategory[key].map((item,index)=>{
                rows.push(<ProductRow key={item.name} item={item} />)
            })
        }
        return ( 
            <div className = "product-table">
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* products go here */}
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;