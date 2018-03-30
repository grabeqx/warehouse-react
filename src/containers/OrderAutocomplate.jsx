import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import CancelIcon from 'material-ui-icons/Cancel';
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp';
import ClearIcon from 'material-ui-icons/Clear';
import Chip from 'material-ui/Chip';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import SelectWrapped from './SelectWrapped';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  }
});

const OrderAutocomplate = (props) => {
    var suggestions = props.suggestions.map(suggestion => ({
        value: suggestion.id,
        label: suggestion.name,
    }));
    const { classes } = props;
    return (
        <div className={classes.root}>
        <TextField
            fullWidth
            value={props.multiLabel}
            onChange={props.handleChange('multiLabel')}
            onKeyUp={props.loadNewData}
            placeholder="Podaj nazwy produktów"
            name="react-select-chip-label"
            label="Produkty"
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{
                inputComponent: SelectWrapped,
                inputProps: {
                    classes,
                    multi: true,
                    instanceId: 'react-select-chip-label',
                    id: 'react-select-chip-label',
                    simpleValue: true,
                    options: suggestions
                },
            }}
        />
        </div>
    )
}

export default withStyles(styles)(OrderAutocomplate);