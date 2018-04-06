import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3
    },
});

const CenteredTabs = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Typography variant="headline" gutterBottom>Raport wydanych produktów</Typography>
            <Paper className={classes.root}>
                <Tabs
                    value={props.value}
                    onChange={props.onChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="1 dzień" />
                    <Tab label="1 tydzień" />
                    <Tab label="1 miesiąć" />
                    <Tab label="Raport stanu" />
                </Tabs>
            </Paper>
        </React.Fragment>
    );
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
