import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Description from 'material-ui-icons/Description';
import ViewList from 'material-ui-icons/ViewList';
import AddCircle from 'material-ui-icons/AddCircle';
import ContentPaste from 'material-ui-icons/ContentPaste';
import Create from 'material-ui-icons/Create';
import { Link } from 'react-router-dom'

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
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <ViewList />
                        </ListItemIcon>
                        <ListItemText primary="Magazyn" />
                    </ListItem>
                </Link>
                <Link to="/order" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <ContentPaste />
                        </ListItemIcon>
                        <ListItemText primary="Zlecenie" />
                    </ListItem>
                </Link>
                <Link to="/report" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <Description />
                        </ListItemIcon>
                        <ListItemText primary="Raport" />
                    </ListItem>
                </Link>
                <Link to="/add" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText primary="Dodaj produkt" />
                    </ListItem>
                </Link>
                <Link to="/fill" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <Create />
                        </ListItemIcon>
                        <ListItemText primary="Uzupełnij stany" />
                    </ListItem>
                </Link>
                <Link to="/admin" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Admin" />
                    </ListItem>
                </Link>
            </List>
        </Drawer> )
};
  
export default withStyles(styles)(MainDraver);