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
    }
});

const ProductForm = (props) => {
    const Animation = props.animationType;
    return (
        <Animation in={props.visible}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={8} md={8} lg={6}>
                    <Paper className={props.classes.paper}>
                        <Typography variant="headline" gutterBottom>Wypełnij dane o produkcie</Typography>
                        <form onSubmit={props.submitForm}>
                            <Grid container spacing={24}>
                                <Grid item xs={12} className={props.classes.inputContainer}>
                                    <FormInput title="Nazwa" name="name" type="text" onChange={props.onChange} value={props.values.name}/>
                                </Grid>
                                <Grid item xs={12} className={props.classes.inputContainer}>
                                    <FormInput title="Dostawca" name="provider" type="text" onChange={props.onChange} value={props.values.provider}/>
                                </Grid>
                                <Grid item xs={12} className={props.classes.inputContainer}>
                                    <FormInput title="Cena" name="price" type="text" onChange={props.onChange} value={props.values.price}/>
                                </Grid>
                                <Grid item xs={12} className={props.classes.inputContainer}>
                                    <FormInput title="Ilosć" name="quantity" type="number" onChange={props.onChange} value={props.values.quantity}/>
                                </Grid>
                                <Grid item xs={12} className={props.classes.inputContainer}>
                                    <FormInput title="Podświetlenie od" name="quantityAlert" type="number" onChange={props.onChange} value={props.values.quantityAlert}/>
                                </Grid>
                                <Grid item xs={12} className={props.classes.inputContainer}>
                                    <FormInput title="Zdjęcie" name="image" type="file" onChange={props.onChange} value={props.values.image}/>
                                </Grid>
                                <Grid item xs={6} className={props.classes.inputContainer}>
                                    <FormControl>
                                        <Button variant="raised" color="primary" className={props.classes.button} type="submit">{props.submitText}</Button>
                                    </FormControl>
                                    {props.showLoader ? <CircularProgress size={35}/> : null}
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Animation>
    )
}

export default withStyles(styles)(ProductForm);