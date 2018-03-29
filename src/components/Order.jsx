import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { changeTitle } from '../actions/actions';

class Order extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.changeTitle('Zlecenie');
    }

    render() {
        return (
            <div>Order</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title
    }
}

export default connect(mapStateToProps, { changeTitle })(Order);
