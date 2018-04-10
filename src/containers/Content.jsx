import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";

import MainDrawer from "./MainDrawer";
import MainAppBar from "./MainAppBar";

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
        padding: theme.spacing.unit * 1,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth+'px',
            padding: theme.spacing.unit * 3,
        },
    }
});

const Content = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.appFrame}>
                <MainAppBar title={props.pageName} />
                <MainDrawer />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {props.children}
                </main>
            </div>
        </div>
    );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
