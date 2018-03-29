import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { changeTitle } from '../actions/actions';

class AdminPanel extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.changeTitle('Panel administratora');
    }

    render() {
        return (
            <div>AdminPanel</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title
    }
}

export default connect(mapStateToProps, { changeTitle })(AdminPanel);