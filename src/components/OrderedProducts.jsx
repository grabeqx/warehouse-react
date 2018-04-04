import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import ProductTable from '../containers/ProductTable';
import OrderButton from '../containers/OrderButton';
import { saveOrder } from '../actions/actions';

class OrderedProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableTitles: ['Id','Zdjęcie', 'Nazwa', 'Cena', 'Ilość', 'Wydano'],
            products: this.props.products,
            loader: this.props.addLoader
        };
        this.defineProductOrder = this.defineProductOrder.bind(this);
        this.saveOrder = this.saveOrder.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        var products = nextProps.products.map((product) => {
            var key = this.state.products.findIndex((p) => p.id == product.id);
            if(key >= 0) {
                product.remove = this.state.products[key].remove !== '' ? this.state.products[key].remove : '';
            } else {
                product.remove = '';
            }
            return product;
        });
        this.setState({
            products: products,
            loader: nextProps.addLoader
        });
    }

    defineProductOrder(e, id) {
        var key = this.state.products.findIndex((product) => product.id == id);
        var stateCopy = Object.assign({}, this.state);
        stateCopy.products = stateCopy.products.slice();
        stateCopy.products[key] = Object.assign({}, stateCopy.products[key]);
        stateCopy.products[key].remove = e.target.value;
        this.setState(stateCopy);
    }

    saveOrder() {
        var products = this.state.products.map((product) => {
            return {
                id: product.id,
                remove: product.remove ? product.remove : "0",
                newQuantity: product.remove ? (parseInt(product.quantity) - parseInt(product.remove)) : parseInt(product.quantity)
            }
        });
        this.props.saveOrder(products);
        this.props.clearSelect();
    }

    render() {
        return (
            <React.Fragment>
                {this.state.products.length > 0 ? <React.Fragment>
                    <ProductTable 
                        tableTitles={this.state.tableTitles}
                        tableRows={this.state.products}
                        noLink={true}
                        editable={true}
                        defineProductOrder={this.defineProductOrder}
                    /> 
                    <OrderButton 
                        showLoader={this.state.loader}
                        saveOrder={this.saveOrder}
                    />
                </React.Fragment>
                : null}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        addLoader: state.appReducer.addLoader
    }
}

export default connect(mapStateToProps, { saveOrder })(OrderedProducts);
