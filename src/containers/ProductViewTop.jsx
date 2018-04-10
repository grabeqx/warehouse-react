import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

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
    },
    pullRight: {
        float: 'right'
    }
});

const ProductViewTop = ({product, classes, animationType, visible, isAdmin, editProduct}) => {
    const Animation = animationType;
    return (
        <Animation in={visible}>
            <Grid container spacing={24}>
                <Grid item md={4} xs={12}>
                    <Paper className={classes.imageContainer}>
                        <img src={product.image} className={classes.image}/>
                    </Paper>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Paper className={classes.paper}>
                        {isAdmin ? <Button color="primary" onClick={editProduct} className={classes.pullRight}>Edytuj</Button> : null}
                        <Typography variant="display2" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="title" gutterBottom>
                            Cena:
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                            {product.price} zł
                        </Typography>
                        <Typography variant="title" gutterBottom>
                            Dostawca:
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                            {product.provider}
                        </Typography>
                        <Typography variant="title" gutterBottom>
                            Ilość:
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                            {product.quantity}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Animation>
    )
}

export default withStyles(styles)(ProductViewTop);