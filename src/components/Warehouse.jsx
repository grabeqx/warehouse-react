import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

import SearchComponent from './SearchComponent';
import ProductTableComponent from './ProductTableComponent';
import { changeTitle } from '../actions/actions';

class Warehouse extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.changeTitle('Magazyn');
    }

    render() {
        return (
            <div>
                <SearchComponent />
                <ProductTableComponent />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title
    }
}

export default connect(mapStateToProps, { changeTitle })(Warehouse);