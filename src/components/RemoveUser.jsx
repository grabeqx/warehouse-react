import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Fade from 'material-ui/transitions/Fade';

import { removeUser, getUsers } from '../actions/actions';
import RemoveUserForm from '../containers/RemoveUserForm';

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm =this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            userId: '',
            loader: this.props.addLoader,
            users: this.props.users
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            users: nextProps.users,
            loader: nextProps.addLoader
        })
    }

    componentDidMount() {
       this.props.getUsers();
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        this.props.removeUser(this.state.userId);
        this.props.getUsers();
    }

    render() {
        return (
            <RemoveUserForm 
                submitForm={(e) => this.submitForm(e)}
                onChange={(e) => this.onChange(e)}
                values={this.state}
                showLoader={this.state.loader}
                animationType={Fade}
                visible={true}
                users={this.state.users}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.appReducer.users,
        addLoader: state.appReducer.addLoader
    }
}

export default connect(mapStateToProps, { removeUser, getUsers })(AdminPanel);