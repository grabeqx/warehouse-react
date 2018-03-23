import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

import { MenuItem } from "material-ui/Menu";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";

import MainDrawer from "../containers/MainDrawer";
import MainAppBar from "../containers/MainAppBar";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    appFrame: {
        minHeight: "100vh",
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: "100%"
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3
    }
});

class Layout extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <MainAppBar title="Warehouse" />
                    <MainDrawer />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
