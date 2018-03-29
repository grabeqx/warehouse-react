import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';

import MENU from '../constants/menu';

const drawerWidth = 240;
const styles = theme => ({
    drawerPaper: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar
});

var MainDraver = (props) => {
    const { classes } = props;
    return ( 
        <Drawer
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {MENU.map((menuItem, index) => {
                    let MenuIcon = menuItem.icon;
                    return (
                        <Link to={menuItem.url} key={index} style={{ textDecoration: 'none' }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <MenuIcon />
                                </ListItemIcon>
                                <ListItemText primary={menuItem.name} />
                            </ListItem>
                        </Link>
                        )
                })}
            </List>
        </Drawer> )
};
  
export default withStyles(styles)(MainDraver);