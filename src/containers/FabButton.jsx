import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import FileDownload from 'material-ui-icons/FileDownload';

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 8,
        right: theme.spacing.unit * 3,
    },
});

const FabButton = (props) => {
    const Animation = props.animationType;
    const Icon = props.icon;
    return (
        <Animation in={props.visible}>
            <Button variant="fab" className={props.classes.fab} color={props.color} onClick={props.onClick}>
                <Icon />
            </Button>
        </Animation>
    )
}

FabButton.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FabButton);