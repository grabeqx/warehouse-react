import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Grow from 'material-ui/transitions/Grow';

import ProductTable from '../containers/ProductTable';
import OrderButton from '../containers/OrderButton';
import { saveOrder, addOrder } from '../actions/actions';
import { formatDate } from '../utils/utils.js';

class OrderedProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableTitles: ['Id','Zdjęcie', 'Nazwa', 'Cena', 'Ilość', 'Wydano'],
            products: this.props.products,
            loader: this.props.addLoader,
            type: this.props.type
        };
        this.defineProductOrder = this.defineProductOrder.bind(this);
        this.saveOrder = this.saveOrder.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        var products = nextProps.products.map((product) => {
            var key = this.state.products.findIndex((p) => p.id == product.id);
            if(key >= 0) {
                product.remove = this.state.products[key].remove !== '' ? this.state.products[key].remove : '';
                product.add = this.state.products[key].add !== '' ? this.state.products[key].add : '';
            } else {
                product.remove = '';
                product.add = '';
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
        this.state.type === 'fill' ? stateCopy.products[key].add = e.target.value : stateCopy.products[key].remove = e.target.value;
        this.setState(stateCopy);
    }

    saveOrder() {
        var products = this.state.products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                quantity: product.quantity,
                remove: product.remove ? product.remove : "0",
                add: product.add ? product.add : "0",
                newQuantity: product.remove ? (parseInt(product.quantity) - parseInt(product.remove)) : product.add ? (parseInt(product.quantity) + parseInt(product.add)) : parseInt(product.quantity)
            }
        });
        console.log(products);
        this.props.saveOrder(products);
        this.props.addOrder(products, formatDate());
    }

    render() {
        return (
            <React.Fragment>
                <ProductTable 
                    tableTitles={this.state.tableTitles}
                    tableRows={this.state.products}
                    noLink={true}
                    editable={true}
                    defineProductOrder={this.defineProductOrder}
                    type={this.state.type}
                    visible={this.state.products.length > 0}
                    animationType={Grow}
                /> 
                <OrderButton 
                    showLoader={this.state.loader}
                    saveOrder={this.saveOrder}
                    visible={this.state.products.length > 0}
                    animationType={Grow}
                />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        addLoader: state.appReducer.addLoader
    }
}

export default connect(mapStateToProps, { saveOrder, addOrder })(OrderedProducts);
