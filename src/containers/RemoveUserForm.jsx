import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import purple from "material-ui/colors/purple";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

import FormInput from './FormInput';

const styles = theme => ({
    paper: {
        boxSizing: 'border-box',
        padding: theme.spacing.unit * 2
    },
    inputContainer: {
        boxSizing: 'border-box',
        padding: '10px',
        display: 'flex'
    },
    button: {
        maxWidth: `calc(100% - ${theme.spacing.unit * 2}px)`,
        width: "200px"
    },
    select: {
        width: "200px"
    }
});

const RemoveUserForm = (props) => {
    const Animation = props.animationType;
    return (
        <Animation in={props.visible}>
            <Paper className={props.classes.paper}>
                <Typography variant="headline" gutterBottom>Usuń użytkownika</Typography>
                <form onSubmit={props.submitForm}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} className={props.classes.inputContainer}>
                            <FormControl>
                                <InputLabel>Admin</InputLabel>
                                <Select
                                    value={props.values.userId}
                                    onChange={props.onChange}
                                    className={props.classes.select}
                                    name="userId"
                                >
                                {props.users.map((user) => (
                                    <MenuItem value={user.id} key={user.id}>{user.username}</MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} className={props.classes.inputContainer}>
                            <FormControl>
                                <Button variant="raised" color="primary" className={props.classes.button} type="submit">Usuń</Button>
                            </FormControl>
                            {props.showLoader ? <CircularProgress size={35}/> : null}
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Animation>
    )
}

export default withStyles(styles)(RemoveUserForm);