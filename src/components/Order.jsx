import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { changeTitle } from '../actions/actions';
import UpdateStore from './UpdateStore';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'empty'
        }
    }

    componentDidMount() {
        this.props.changeTitle('Zlecenie');
    }

    render() {
        return (
            <UpdateStore 
                type={this.state.type}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title
    }
}

export default connect(mapStateToProps, { changeTitle })(Order);