import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { changeTitle } from '../actions/actions';

class FillState extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.changeTitle('Uzupełnij stany');
    }

    render() {
        return (
            <div>FillState</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title
    }
}

export default connect(mapStateToProps, { changeTitle })(FillState);