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
import { searchProduct, filterProducts, reset } from '../actions/actions';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.searchProduct = this.searchProduct.bind(this);
        this.filterStart = this.filterStart.bind(this);
        this.filterEnd = this.filterEnd.bind(this);
        this.addFilters = this.addFilters.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            filterStart: this.props.filterStart,
            filterEnd: this.props.filterEnd,
            query: this.props.query,
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            query: nextProps.query,
            filterStart: nextProps.filterStart,
            filterEnd: nextProps.filterEnd            
        });
    }

    searchProduct(e) {
        this.setState({
            query: e.target.value
        }, () => {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                if(this.state.query.length >= 3 || this.state.query === '') {
                    this.props.searchProduct(this.state.query);
                }
            }, 500);
        })
    }

    filterStart(e) {
        this.setState({
            filterStart: e.target.value
        });
    }

    filterEnd(e) {
        this.setState({
            filterEnd: e.target.value
        });
    }

    addFilters() {
        this.props.filterProducts(this.state.filterStart, this.state.filterEnd);
    }

    reset() {
        this.props.reset();
    }

    render() {
        return <Search title="Wyszukaj produkt" 
            onChangeSearch={(e) => this.searchProduct(e)}
            searchValue={this.state.query}
            filterStart={(e) => this.filterStart(e)}
            filterStartValue={this.state.filterStart}
            filterEnd={(e) => this.filterEnd(e)}
            filterEndValue={this.state.filterEnd}
            addFilters={this.addFilters}
            reset={this.reset}
        />;
    }
}

function mapstateToProps(state) {
    return {
        query: state.productsReducer.query,
        filterStart: state.productsReducer.filterStart,
        filterEnd: state.productsReducer.filterEnd
    }
}


export default connect(mapstateToProps, { searchProduct, filterProducts, reset })(SearchComponent);
