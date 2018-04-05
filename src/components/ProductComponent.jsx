import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Fade from 'material-ui/transitions/Fade';

import { getProduct, getProductOrders } from '../actions/actions';
import ProductViewTop from '../containers/ProductViewTop';
import OredersTable from '../containers/OredersTable';

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            product: this.props.product,
            tableTitles: ['Id','Data', 'Id pracownika', 'Ilość'],
            orders: this.props.orders
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            product: nextProps.product,
            orders: nextProps.orders
        });
    }

    componentDidMount() {
        this.props.getProduct(this.state.id);
        this.props.getProductOrders(this.state.id);
    }

    render() {
        return (
            <div>
                <ProductViewTop 
                    product={this.state.product}
                    animationType={Fade}
                    visible={true}
                />
                { this.state.orders.length > 0 ?
                    <OredersTable 
                        tableTitles={this.state.tableTitles}
                        orders={this.state.orders}
                        visible={true}
                        animationType={Fade}
                        productId={this.state.id}
                    /> : null
                }
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        product: state.productReducer.product,
        orders: state.productReducer.orders
    }
}

export default connect(mapStateToProps, { getProduct, getProductOrders })(ProductComponent);