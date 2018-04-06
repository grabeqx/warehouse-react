import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from 'material-ui/Button';
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import { MenuItem } from "material-ui/Menu";
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import UserInfo from './UserInfo';

const drawerWidth = 240;
const styles = theme => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        
    },
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    }
});

var MainAppBar = (props) => {
    const { classes } = props;
    return (
        <AppBar
            position="fixed"
            className={classNames(classes.appBar, classes[`appBar-left`], classes.root)}>
            <Toolbar>
                <Typography variant="title" color="inherit" noWrap className={classes.flex}>
                {props.title}
                </Typography>
                <UserInfo />
                <Button color="inherit" href="/logout.php">Wyloguj się</Button>
            </Toolbar>
        </AppBar>
    )
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title
    }
}

export default compose(withStyles(styles),connect(mapStateToProps, null))(MainAppBar);
