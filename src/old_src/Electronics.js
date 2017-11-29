import React, {Component} from 'react';
import products from './products';
import Product from './Product';
class Electronics extends Component {
    render() {
        return (
        <div className="container">
            <div className="col-sm-4">
                <h3>Electronics</h3>
                <Product />
            </div>
        </div>
        )
    }
}
export default Electronics;