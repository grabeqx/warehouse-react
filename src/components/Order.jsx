import React from 'react';
import { connect } from 'react-redux';

import { changeTitle, getOrderedProducts } from '../actions/actions';
import OrderAutocomplate from '../containers/OrderAutocomplate';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            multiLabel: null,
            products: this.props.products,
            query: this.props.query
        };
        this.handleChange = this.handleChange.bind(this);
        this.loadNewData = this.loadNewData.bind(this);
    }

    componentDidMount() {
        this.props.changeTitle('Zlecenie');
        this.props.getOrderedProducts(this.state.query);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.products);
        this.setState({
            products: nextProps.products
        })
    }

    loadNewData(e) {
        console.log(e.target.value);
        this.setState({
            query: e.target.value
        }, () => {
            this.props.getOrderedProducts(this.state.query);
        });
    }

    handleChange = name => value => {
        console.log(value);
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <OrderAutocomplate 
                handleChange={this.handleChange}
                multiLabel={this.state.multiLabel}
                selectValue={this.selectValue}
                suggestions={this.state.products}
                loadNewData={this.loadNewData}
            />
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
