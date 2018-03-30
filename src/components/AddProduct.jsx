import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { changeTitle, addProduct } from '../actions/actions';
import AddForm from '../containers/AddForm';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm =this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            image: '',
            name: '',
            price: '',
            quantity: '',
            loader: this.props.addLoader
        };
    }

    componentDidMount() {
        this.props.changeTitle('Dodaj produkt');
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loader: nextProps.addLoader
        });
    }

    submitForm(e) {
        e.preventDefault();
        this.validateForm() && this.props.addProduct(this.state);
    }
    
    validateForm() {
        return this.state.name !== '' && this.state.price !== '' && this.state.quantity !== '';
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
            <AddForm
                submitForm={(e) => this.submitForm(e)}
                onChange={(e) => this.onChange(e)}
                values={this.state}
                showLoader={this.state.loader}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title,
        addLoader: state.appReducer.addLoader
    }
}

export default connect(mapStateToProps, { changeTitle, addProduct })(AddProduct);