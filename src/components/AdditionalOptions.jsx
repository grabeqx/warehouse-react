import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Fade from 'material-ui/transitions/Fade';

import { saveConfig } from '../actions/actions';
import AdditionalConfigForm from '../containers/AdditionalConfigForm';

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm =this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            productAlert: this.props.productAlert,
            loader: this.props.addLoader
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loader: nextProps.addLoader,
            productAlert: nextProps.productAlert
        })
    }
    
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        this.props.saveConfig(this.state);
    }

    render() {
        return (
            <AdditionalConfigForm 
                submitForm={(e) => this.submitForm(e)}
                onChange={(e) => this.onChange(e)}
                values={this.state}
                showLoader={this.state.loader}
                animationType={Fade}
                visible={true}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        addLoader: state.appReducer.addLoader,
        productAlert: state.productsReducer.productAlert
    }
}

export default connect(mapStateToProps, { saveConfig })(AdminPanel);