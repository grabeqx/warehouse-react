import React from 'react';
import { connect } from 'react-redux';

import { changeTitle, getOrderedProducts } from '../actions/actions';
import OrderAutocomplate from '../containers/OrderAutocomplate';
import OrderedProducts from './OrderedProducts';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            multiLabel: null,
            products: this.props.products,
            query: this.props.query,
            selectedProducts: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.loadNewData = this.loadNewData.bind(this);
        this.clearSelect = this.clearSelect.bind(this);
    }

    componentDidMount() {
        this.props.changeTitle('Zlecenie');
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
            products: vm.removeDuplications([...this.state.products, ...nextProps.products])
        })
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
            selectedProducts: []
        })
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
                />
                <OrderedProducts 
                    products={this.state.selectedProducts}
                    clearSelect={this.clearSelect}
                />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title,
        query: state.orderReducer.query,
        products: state.orderReducer.products
    }
}

export default connect(mapStateToProps, { changeTitle, getOrderedProducts })(Order);
