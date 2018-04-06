import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Fade from 'material-ui/transitions/Fade';

import { addUser } from '../actions/actions';
import AddUserController from '../containers/AddUserContainer';

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm =this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            username: '',
            password: '',
            email: '',
            isAdmin: 0,
            loader: this.props.addLoader
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loader: nextProps.addLoader
        })
    }
    
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addUser(this.state);
    }

    render() {
        return (
            <AddUserController 
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
        addLoader: state.appReducer.addLoader
    }
}

export default connect(mapStateToProps, { addUser })(AdminPanel);