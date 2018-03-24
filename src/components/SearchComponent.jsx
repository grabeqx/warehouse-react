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

import Search from '../containers/Search';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Search 
            title="Wyszukaj produkt"
        />
    );
  }
}

export default SearchComponent;
