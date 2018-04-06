import React from 'react';
import { connect } from 'react-redux';
import Fade from 'material-ui/transitions/Fade';

import ProductTable from '../containers/ProductTable';
import { getProducts } from '../actions/actions';

class ProductTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableTitles: ['Id','Zdjęcie', 'Nazwa', 'Cena', 'Ilość'],
            tableRows: this.props.products,
            visible: true,
            productAlert: this.props.productAlert
        };
    }

    componentDidMount() {
        this.props.getProducts(
            this.props.productPage, 
            this.props.productStep, 
            this.props.query, 
            this.props.filterStart, 
            this.props.filterEnd
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tableRows: nextProps.products,
            productAlert: this.props.productAlert
        });
    }

    render() {
        return (
            <ProductTable 
                tableTitles={this.state.tableTitles}
                tableRows={this.state.tableRows}
                visible={this.state.visible}
                animationType={Fade}
                productAlert={this.state.productAlert}
            />
        )
    }

}

function mapstateToProps(state) {
    return {
        products: state.productsReducer.products,
        productPage: state.productsReducer.productPage,
        productStep: state.productsReducer.productStep,
        query: state.productsReducer.query,
        filterStart: state.productsReducer.filterStart,
        filterEnd: state.productsReducer.filterEnd,
        productAlert: state.productsReducer.productAlert
    }
}

export default connect(mapstateToProps, { getProducts })(ProductTableComponent);