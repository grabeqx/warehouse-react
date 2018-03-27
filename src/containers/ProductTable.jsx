import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Table, {TableBody, TableCell, TableHead, TableRow} from "material-ui/Table";
import Paper from "material-ui/Paper";
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    table: {
        minWidth: 700
    },
    narrowColumn: {
        width: "5%"
    }
});

const ProductsTable = props => {
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={1}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    {props.tableTitles.map((title, index) => <TableCell className={classes.head} key={index}>{title}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
            {props.tableRows.map((row) => (
                <TableRow key={row.id}>
                    <TableCell className={classes.narrowColumn}>{row.id}</TableCell>
                    <TableCell className={classes.narrowColumn}>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </Paper>
  );
};

ProductsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductsTable);
