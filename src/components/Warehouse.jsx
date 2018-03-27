import React from 'react';
import ReactDOM from 'react-dom';

import SearchComponent from './SearchComponent';
import ProductTable from '../containers/ProductTable';
import ProductTableComponent from './ProductTableComponent';

class Warehouse extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SearchComponent />
                <ProductTableComponent />
            </div>
        )
    }
}

export default Warehouse;