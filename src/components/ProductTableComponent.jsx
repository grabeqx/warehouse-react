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

    componentWillMount() {
        this.props.getProducts(this.props.productPage, this.props.productStep, this.props.query);
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
        products: state.productReducer.products,
        productPage: state.productReducer.productPage,
        productStep: state.productReducer.productStep,
        query: state.productReducer.query
    }
}

export default connect(mapstateToProps, { getProducts })(ProductTableComponent);