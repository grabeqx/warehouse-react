import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Grow from 'material-ui/transitions/Grow';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import FileDownload from 'material-ui-icons/FileDownload';

import { singleHTMLtoPDF } from '../utils/utils';
import ProductTable from '../containers/ProductTable';
import OrderButton from '../containers/OrderButton';
import { saveOrder, addOrder, notifyUser } from '../actions/actions';
import { formatDate } from '../utils/utils.js';
import RaportTable from '../containers/RaportTable';
import FabButton from '../containers/FabButton';

class OrderedProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableTitles: ['Id','Zdjęcie', 'Nazwa', 'Cena', 'Ilość', 'Wydano'],
            products: this.props.products,
            loader: this.props.addLoader,
            type: this.props.type,
            productAlert: this.props.productAlert,
            savedProducts: [],
            productsLabels: ['Id', 'Nazwa', 'Ilość'],
            name: this.props.name,
            savedName: ''
        };
        this.defineProductOrder = this.defineProductOrder.bind(this);
        this.saveOrder = this.saveOrder.bind(this);
        this.downloadPdf = this.downloadPdf.bind(this);
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
            loader: nextProps.addLoader,
            productAlert: nextProps.productAlert,
            name: nextProps.name
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
        var productsIds = [];
        var toLow = false;
        var products = this.state.products.map((product) => {
            productsIds.push(product.id);
            if(parseInt(product.quantity) - parseInt(product.remove) < 0) {
                toLow = true;
            }
            return {
                id: product.id,
                name: product.name,
                quantity: product.quantity,
                remove: product.remove ? product.remove : "0",
                add: product.add ? product.add : "0",
                newQuantity: product.remove ? (parseInt(product.quantity) - parseInt(product.remove)) : product.add ? (parseInt(product.quantity) + parseInt(product.add)) : parseInt(product.quantity)
            }
        });
        if(toLow) {
            this.props.notifyUser('Za dużo do wydania');
        } else if(this.state.type === 'empty' && this.state.name.length <= 0) {
            this.props.notifyUser('Podaj nazwe');
        } else {
            if(this.state.type === 'empty') {
                products = products.filter((product) => product.remove !== '0')
            } else {
                products = products.filter((product) => product.add !== '0')
            }
            this.props.saveOrder(products);
            this.props.addOrder(products, formatDate(), productsIds.join('|'), this.state.type, this.state.name);
            this.setState({
                savedProducts: products,
                savedName: this.state.name
            })
        }
    }

    downloadPdf() {
        singleHTMLtoPDF(this.state.savedName);
    }

    render() {
        return (
            <React.Fragment>
                {this.state.products.length > 0 ? 
                <React.Fragment>
                    {this.state.type === 'empty' ?
                    <FormControl className="orderName">
                        <InputLabel htmlFor="custom-color-input">Nazwa</InputLabel>
                        <Input
                            onChange={this.props.changeName}
                            value={this.state.name}
                            required
                        />
                    </FormControl> : null}
                    <ProductTable 
                        tableTitles={this.state.tableTitles}
                        tableRows={this.state.products}
                        noLink={true}
                        editable={true}
                        defineProductOrder={this.defineProductOrder}
                        type={this.state.type}
                        visible={this.state.products.length > 0}
                        animationType={Grow}
                        productAlert={this.state.productAlert}
                    /> 
                    <OrderButton 
                        showLoader={this.state.loader}
                        saveOrder={this.saveOrder}
                        visible={this.state.products.length > 0}
                        animationType={Grow}
                    /> 
                </React.Fragment> : null}
                {(this.state.type === 'empty' && this.state.products.length <= 0 && this.state.savedProducts.length > 0) ?
                    <React.Fragment>
                        <RaportTable 
                            products={this.state.savedProducts}
                            labels={this.state.productsLabels}
                            visible={true}
                            animationType={Grow}
                            singleOrder={true}
                        />
                        <FabButton 
                            onClick={this.downloadPdf} 
                            visible={true}
                            animationType={Grow}
                            icon={FileDownload}
                            color="primary"
                        /> 
                    </React.Fragment>
                : null}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        addLoader: state.appReducer.addLoader,
        productAlert: state.productsReducer.productAlert
    }
}

export default connect(mapStateToProps, { saveOrder, addOrder, notifyUser })(OrderedProducts);
