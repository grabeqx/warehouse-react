import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { getProduct } from '../actions/actions';
import ProductViewTop from '../containers/ProductViewTop';

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            product: this.props.product
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            product: nextProps.product
        });
    }

    componentDidMount() {
        this.props.getProduct(this.state.id);
    }

    render() {
        return (
            <ProductViewTop product={this.state.product}/>
        )
    }
}

function mapStateToProps(state){
    return {
        product: state.productReducer
    }
}

export default connect(mapStateToProps, { getProduct })(ProductComponent);