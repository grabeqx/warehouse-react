import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import purple from "material-ui/colors/purple";
import Paper from 'material-ui/Paper';

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
    },
    paper: {
        height: 140,
        width: 100,
    },
});

const AddForm = ({props, classes}) => (
    <Paper className={classes.paper}>
        <FormControl className={classes.formControl}>
            <InputLabel
                FormControlClasses={{focused: classes.inputLabelFocused}}
                htmlFor="custom-color-input"
            >
                Nazwa
            </InputLabel>
            <Input 
                classes={{underline: classes.inputUnderline}}
                startAdornment = {<InputAdornment position="start"></InputAdornment>}
            />
        </FormControl>
    </Paper>
);

export default withStyles(styles)(AddForm);