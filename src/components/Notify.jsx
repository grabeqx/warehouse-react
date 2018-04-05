import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { connect } from 'react-redux';
import Button from "material-ui/Button";
import Snackbar from "material-ui/Snackbar";
import IconButton from "material-ui/IconButton";
import CloseIcon from "material-ui-icons/Close";
import compose from 'recompose/compose';

import { closeNotify } from '../actions/actions';

const styles = theme => ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4
    }
});

class Notify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.notify,
            text: this.props.notifyText
        };
        this.handleClose = this.handleClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.notify,
            text: nextProps.notifyText
        })
    }

    handleClose(event, reason) {
        if (reason === "clickaway") {
            return;
        }
        this.props.closeNotify();
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right"
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    SnackbarContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    message={<span id="message-id">{this.state.text}</span>}
                    action={
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                />
            </div>
        )
    }
}

Notify.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        notify: state.appReducer.notify,
        notifyText: state.appReducer.notifyText
    }
}

export default compose(withStyles(styles),connect(mapStateToProps, {closeNotify}))(Notify);
