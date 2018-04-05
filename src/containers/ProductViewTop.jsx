import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
    imageContainer: {
        textAlign: 'center',
    },
    image: {
        maxWidth: "100%",
        marginBottom: "-4px"
    }
});

const ProductViewTop = ({product, classes}) => (
    <Grid container spacing={24}>
        <Grid item xs={4}>
            <Paper className={classes.imageContainer}>
                <img src={product.image} className={classes.image}/>
            </Paper>
        </Grid>
        <Grid item xs={8}>
            <Paper className={classes.paper}>
                <Typography variant="display2" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="headline" gutterBottom>
                    Cena:
                </Typography>
                <Typography variant="subheading" gutterBottom>
                    {product.price} zł
                </Typography>
                <Typography variant="headline" gutterBottom>
                    Ilość:
                </Typography>
                <Typography variant="subheading" gutterBottom>
                    {product.quantity}
                </Typography>
            </Paper>
        </Grid>
    </Grid>
)

export default withStyles(styles)(ProductViewTop);