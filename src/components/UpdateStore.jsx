import React from 'react';
import { connect } from 'react-redux';
import Fade from 'material-ui/transitions/Fade';

import { getOrderedProducts } from '../actions/actions';
import OrderAutocomplate from '../containers/OrderAutocomplate';
import OrderedProducts from './OrderedProducts';

class UpdateStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            multiLabel: null,
            products: this.props.products,
            query: '',
            selectedProducts: [],
            type: this.props.type
        };
        this.handleChange = this.handleChange.bind(this);
        this.loadNewData = this.loadNewData.bind(this);
        this.clearSelect = this.clearSelect.bind(this);
    }

    componentDidMount() {
        this.props.getOrderedProducts(this.state.query);
    }

    removeDuplications(products) {
        return products = products.filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t.id === thing.id && t.name === thing.name
            ))
        )
    }

    componentWillReceiveProps(nextProps) {
        var vm = this;
        this.setState({
            products: nextProps.toggleClear ? nextProps.products : vm.removeDuplications([...this.state.products, ...nextProps.products])
        }, () => {
            if(nextProps.toggleClear) {
                this.clearSelect();
            }
        });
    }

    loadNewData(e) {
        this.setState({
            query: e.target.value
        }, () => {
            this.props.getOrderedProducts(this.state.query);
        });
    }

    handleChange(value) {
        this.setState({
            multiLabel: value,
        }, () => {
            this.displaySelectedProducts();
        });
    }

    displaySelectedProducts() {
        let ids = this.state.multiLabel.split(',');
        let selectedProducts = this.state.products.filter((product) => {
            return ids.indexOf(product.id) >= 0 ? true : false
        });

        this.setState({
            selectedProducts: selectedProducts
        });
    }

    clearSelect() {
        this.setState({
            multiLabel: '',
            selectedProducts: [],
            query: ''
        }, () => this.props.getOrderedProducts(this.state.query))
    }

    render() {
        return (
            <React.Fragment>
                <OrderAutocomplate 
                    handleChange={this.handleChange}
                    multiLabel={this.state.multiLabel}
                    selectValue={this.selectValue}
                    suggestions={this.state.products}
                    loadNewData={this.loadNewData}
                    visible={true}
                    animationType={Fade}
                />
                <OrderedProducts 
                    products={this.state.selectedProducts}
                    type={this.state.type}
                />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        toggleClear: state.orderReducer.toggleClear,
        products: state.orderReducer.products
    }
}

export default connect(mapStateToProps, { getOrderedProducts })(UpdateStore);
