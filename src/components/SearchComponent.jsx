import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Input, { InputLabel } from "material-ui/Input";
import purple from "material-ui/colors/purple";
import TextField from "material-ui/TextField";
import { FormControl } from "material-ui/Form";
import { connect } from 'react-redux';

import Search from "../containers/Search";
import { searchProduct, filterProducts } from '../actions/actions';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.searchProduct = this.searchProduct.bind(this);
        this.filterStart = this.filterStart.bind(this);
        this.filterEnd = this.filterEnd.bind(this);
        this.addFilters = this.addFilters.bind(this);
        this.state = {
            filterStart: '',
            filterEnd: ''
        }
    }

    searchProduct(e) {
        var value = e.target.value;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if(value.length >= 3 || value === '') {
                this.props.searchProduct(this.props.productPage, this.props.productStep, value);
            }
        }, 500);
    }

    saveValueToState(props, val) {
        this.setState({
            [props]: val
        });
    }

    filterStart(e) {
        var value = e.target.value;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.saveValueToState('filterStart', value);
        }, 300);
    }

    filterEnd(e) {
        var value = e.target.value;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.saveValueToState('filterEnd', value);
        }, 300);
    }

    addFilters() {
        this.props.filterProducts(this.state.filterStart, this.state.filterEnd);
    }

    render() {
        return <Search title="Wyszukaj produkt" 
            onChangeSearch={(e) => this.searchProduct(e)}
            filterStart={(e) => this.filterStart(e)}
            filterEnd={(e) => this.filterEnd(e)}
            addFilters={this.addFilters}
        />;
    }
}

function mapstateToProps(state) {
    return {
        productPage: state.productReducer.productPage,
        productStep: state.productReducer.productStep
    }
}


export default connect(mapstateToProps, { searchProduct, filterProducts })(SearchComponent);
