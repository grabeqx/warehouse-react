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
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3
    }),
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
    textFieldRoot: {
        padding: 0,
        "label + &": {
        marginTop: theme.spacing.unit * 3
        }
    },
    textFieldInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 12px",
        width: "calc(100% - 24px)",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:focus": {
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
        }
    },
    textFieldFormLabel: {
        fontSize: 18
    },
    button: {
        margin: theme.spacing.unit,
    },
});

const Search = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
            {props.title}
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={11}>
                    <FormControl className={classes.formControl}>
                    <InputLabel
                        FormControlClasses={{
                        focused: classes.inputLabelFocused
                        }}
                        htmlFor="custom-color-input"
                    >
                        Szukaj
                    </InputLabel>
                    <Input
                        classes={{
                        underline: classes.inputUnderline
                        }}
                        id="custom-color-input"
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="raised" color="primary" className={classes.button}>
                        Primary
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

Search.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);