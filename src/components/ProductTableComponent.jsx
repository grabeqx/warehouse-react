import React from 'react';
import { connect } from 'react-redux';

import ProductTable from '../containers/ProductTable';
import { getProducts } from '../actions/actions';

class ProductTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableTitles: ['Id','Zdjęcie', 'Nazwa', 'Cena', 'Ilość'],
            tableRows: this.props.products
        };
    }

    componentDidMount() {
        this.props.getProducts(2,40);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tableRows: nextProps.products
        });
    }

    render() {
        return (
            <ProductTable 
                tableTitles={this.state.tableTitles}
                tableRows={this.state.tableRows}
            />
        )
    }

}

function mapstateToProps(state) {
    return {
        products: state.productReducer.products
    }
}

export default connect(mapstateToProps, { getProducts })(ProductTableComponent);