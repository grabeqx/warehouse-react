import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { changeTitle } from '../actions/actions';
import AddForm from '../containers/AddForm';

class AddProduct extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.changeTitle('Dodaj produkt');
    }

    render() {
        return (
            <AddForm/>
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title
    }
}

export default connect(mapStateToProps, { changeTitle })(AddProduct);