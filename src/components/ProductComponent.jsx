import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Fade from 'material-ui/transitions/Fade';

import { getProduct, getProductOrders, removeProduct } from '../actions/actions';
import ProductViewTop from '../containers/ProductViewTop';
import OredersTable from '../containers/OredersTable';
import FabButton from '../containers/FabButton';
import Delete from 'material-ui-icons/Delete';

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            product: this.props.product,
            tableTitles: ['Nazwa','Data', 'Id pracownika', 'Ilość'],
            orders: this.props.orders,
            isAdmin: this.props.isAdmin
        };
        this.remove = this.remove.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            product: nextProps.product,
            orders: nextProps.orders
        }, () => {
            nextProps.update && this.props.getProduct(this.state.id);
        });
    }

    componentDidMount() {
        this.props.getProduct(this.state.id);
        this.props.getProductOrders(this.state.id);
    }

    editProduct() {
        this.props.history.push('/edit/'+this.state.id);
    }

    remove() {
        this.props.removeProduct(this.state.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ProductViewTop 
                    product={this.state.product}
                    animationType={Fade}
                    visible={true}
                    isAdmin={this.state.isAdmin}
                    editProduct={this.editProduct}
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
                {this.state.isAdmin ?
                    <FabButton 
                        onClick={this.remove} 
                        visible={true}
                        animationType={Fade}
                        icon={Delete}
                        color="secondary"
                        /> : null}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        product: state.productReducer.product,
        update: state.productReducer.update,
        orders: state.productReducer.orders,
        isAdmin: state.appReducer.isAdmin
    }
}

export default connect(mapStateToProps, { getProduct, getProductOrders, removeProduct })(ProductComponent);