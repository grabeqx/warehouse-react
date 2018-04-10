import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import purple from "material-ui/colors/purple";

const styles = theme => ({
    formControl: {
        [theme.breakpoints.up('sm')]: {
            width: "100%",
        },
        boxSizing: 'border-box',
        margin: '0px;'
    },
    inputLabelFocused: {
        color: purple[500]
    },
    inputUnderline: {
        "&:after": {
        backgroundColor: purple[500]
        }
    }
});

const Filter = (props) => (
    <FormControl className={props.classes.formControl}>
        <InputLabel
            FormControlClasses={{focused: props.classes.inputLabelFocused}}
            htmlFor="custom-color-input"
        >
            {props.fieldName}
        </InputLabel>
        <Input 
            classes={{underline: props.classes.inputUnderline}}
            startAdornment = {<InputAdornment position="start">{props.inputStartText}</InputAdornment>}
            onChange={props.filterEvent}
            value={props.value}
        />
    </FormControl>
);

Filter.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Filter);