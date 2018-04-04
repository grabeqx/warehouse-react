import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import { FormControl } from "material-ui/Form";
const styles = theme => ({
    root: {
        float: "right",
        marginTop: "10px",
        marginRight: "0px",
        display: "flex"
    },
    button: {
        maxWidth: `calc(100% - ${theme.spacing.unit * 2}px)`,
        width: "200px",
        marginLeft: "10px"
    }
});

const OrderButton = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            {props.showLoader ? <CircularProgress className={props.classes.progress} size={35}/> : null}
            <FormControl>
                <Button variant="raised" color="primary" className={props.classes.button} onClick={props.saveOrder}>Zapisz</Button>
            </FormControl>
        </div>
    );
}

OrderButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderButton);
