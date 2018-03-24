import React from 'react';
import ReactDOM from 'react-dom';

import SearchComponent from './SearchComponent';
import ProductTable from '../containers/ProductTable';

class Warehouse extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SearchComponent />
                <ProductTable />
            </div>
        )
    }
}

export default Warehouse;