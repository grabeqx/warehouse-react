import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import purple from "material-ui/colors/purple";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const styles = theme => ({
    formControl: {
        maxWidth: `calc(100% - ${theme.spacing.unit * 2}px)`,
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
});

const FormInput = (props) => (
    <FormControl className={props.classes.formControl}>
        <InputLabel
            FormControlClasses={{focused: props.classes.inputLabelFocused}}
            htmlFor="custom-color-input"
        >
            {props.title}
        </InputLabel>
        <Input 
            classes={{underline: props.classes.inputUnderline}}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            value={props.type !== 'file' ? props.value : undefined}
            endAdornment={props.name === 'price' && <InputAdornment position="end">zł</InputAdornment>}
        />
        <FormHelperText>{(props.value.length === 0 && props.type !== 'file') ? "Pole wymagane" : null}</FormHelperText>
        
    </FormControl>
);

export default withStyles(styles)(FormInput);