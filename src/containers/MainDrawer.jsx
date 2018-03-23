import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Description from 'material-ui-icons/Description';
import ViewList from 'material-ui-icons/ViewList';
import AddCircle from 'material-ui-icons/AddCircle';

const drawerWidth = 240;
const styles = theme => ({
    drawerPaper: {
        position: 'relative',
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
                <ListItem button>
                    <ListItemIcon>
                        <ViewList />
                    </ListItemIcon>
                    <ListItemText primary="Magazyn" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Description />
                    </ListItemIcon>
                    <ListItemText primary="Raport" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AddCircle />
                    </ListItemIcon>
                    <ListItemText primary="Dodaj produkt" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="Admin" />
                </ListItem>
            </List>
        </Drawer> )
};
  
export default withStyles(styles)(MainDraver);