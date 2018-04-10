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
import Menu from 'material-ui-icons/Menu';
import PowerSettingsNew from 'material-ui-icons/PowerSettingsNew';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';

import UserInfo from './UserInfo';
import { handleDrawerToggle } from '../actions/actions';

const drawerWidth = 240;
const styles = theme => ({
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
          width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
    mainToolbar: {
        [theme.breakpoints.down('sm')]: {
            padding: '0px'
        },
    }
});

var MainAppBar = (props) => {
    const { classes } = props;
    return (
        <AppBar
            position="fixed"
            className={classNames(classes.appBar, classes.root)}>
            <Toolbar className={classes.mainToolbar}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerToggle}
                    className={classes.navIconHide}
                >
                    <Menu />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap className={classes.flex}>
                {props.title}
                </Typography>
                <Hidden mdDown><UserInfo /></Hidden>
                <Button color="inherit" href="/logout.php"><Hidden mdDown>Wyloguj się</Hidden><Hidden lgUp><PowerSettingsNew /></Hidden></Button>
            </Toolbar>
        </AppBar>
    )
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title
    }
}

export default compose(withStyles(styles),connect(mapStateToProps, {handleDrawerToggle}))(MainAppBar);
