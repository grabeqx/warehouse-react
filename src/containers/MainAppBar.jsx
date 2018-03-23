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

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`
  }
});

var MainAppBar = (props) => {
    const { classes } = props;
    return (
        <AppBar
            position="absolute"
            className={classNames(classes.appBar, classes[`appBar-left`])}>
            <Toolbar>
                <Typography variant="title" color="inherit" noWrap>
                {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(MainAppBar);
