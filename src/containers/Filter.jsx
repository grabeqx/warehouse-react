import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import purple from "material-ui/colors/purple";

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        width: "100%"
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
        />
    </FormControl>
);

Filter.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Filter);