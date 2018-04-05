import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Table, {TableBody, TableCell, TableHead, TableRow} from "material-ui/Table";
import Paper from "material-ui/Paper";
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';
import Input, {InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import ArrowDropUp from 'material-ui-icons/ArrowDropUp';

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
    },
    mini: {
        maxWidth: "50px"
    },
    up: {
        backgroundColor: "#FFFFFF"
    },
    down: {
        backgroundColor: "#F9FBE7"
    },
    quantityContainer: {
        padding: "0px",
        margin: "0px",
        display: "flex",
        alignItems: "center",
        fontSize: "1.2em"
    }
});

const OredersTable = props => {
  const { classes } = props;
  const Animation = props.animationType;
  return (
    <Animation in={props.visible}>
        <Paper className={classes.root} elevation={1}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {props.tableTitles.map((title, index) => <TableCell className={classes.head} key={index}>{title}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.orders.map((row) => {
                    console.log(JSON.parse(row.products));
                    let product = JSON.parse(row.products).find((product) => product.id === props.productId);
                    let quantity = null, status = '', icon = '';
                    if(product && parseInt(product.add) > 0) {
                        status = classes.up;
                        quantity = product.add;
                        icon = 'up';
                    } else if(product && parseInt(product.remove) > 0) {
                        status = classes.down;
                        quantity = product.remove;
                        icon = 'down';
                    }
                    return (
                        <TableRow key={row.id} className={status}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.userId}</TableCell>
                            <TableCell>
                                <p className={classes.quantityContainer}>
                                    {icon === 'up' ? <ArrowDropUp /> : <ArrowDropDown />}
                                    <span>{quantity}</span>
                                </p>
                            </TableCell>
                        </TableRow>)
                })}
                </TableBody>
            </Table>
        </Paper>
    </Animation>
  );
};

OredersTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OredersTable);
