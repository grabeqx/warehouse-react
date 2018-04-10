import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Fade from 'material-ui/transitions/Fade';

import { changeTitle, getProduct, updateProduct } from '../actions/actions';
import ProductForm from '../containers/ProductForm';

class UpdateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm =this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            image: '',
            name: '',
            price: '',
            quantity: '',
            quantityAlert: '',
            loader: this.props.addLoader,
            id: this.props.match.params.id,
            productId: ''
        };
    }

    componentDidMount() {
        this.props.changeTitle('Edytuj produkt');
        this.props.getProduct(this.state.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loader: nextProps.addLoader,
            image: nextProps.product.image,
            name: nextProps.product.name,
            price: nextProps.product.price,
            quantity: nextProps.product.quantity,
            quantityAlert: nextProps.product.quantityAlert
        });
    }

    submitForm(e) {
        e.preventDefault();
        this.validateForm() && this.props.updateProduct(this.state) && this.props.history.push('/product/'+this.state.id);
    }
    
    validateForm() {
        return this.state.name !== '' && this.state.price !== '' && this.state.quantity !== '' && this.state.quantityAlert !== '';
    }

    onChange(e) {
        if(e.target.type === 'file') {
            this.setState({
                image:e.target.files[0]
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    render() {
        return (
            <ProductForm
                submitForm={(e) => this.submitForm(e)}
                onChange={(e) => this.onChange(e)}
                values={this.state}
                showLoader={this.state.loader}
                animationType={Fade}
                visible={true}
                submitText="Zapisz"
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title,
        addLoader: state.appReducer.addLoader,
        product: state.productReducer.product
    }
}

export default connect(mapStateToProps, { changeTitle, getProduct, updateProduct })(UpdateProduct);