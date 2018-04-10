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
import Hidden from 'material-ui/Hidden';

import CONFIG from '../constants/config';

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
    removePadding: {
        padding: '10px',
        [theme.breakpoints.up('md')]: {
            padding: "0px",
        },
    },
    titleLink: {
        textDecoration: "none", 
        color: "#000",
        padding: "4px 56px 4px 24px",
        display: "flex",
        height: "45px",
        alignItems: "center"
    },
    valueInput: {
        width: '100%'
    }
});

const ProductsTable = props => {
  const { classes } = props;
  const Animation = props.animationType;
  return (
    <Animation in={props.visible}>
        <Paper className={classes.root} elevation={1}>
            <Table className={props.editable ? classes.table + ' productsTable productsTableOrder' :classes.table + ' productsTable' }>
                <TableHead>
                    <TableRow>
                        {props.tableTitles.map((title, index) => <TableCell className={classes.head} key={index}>{title}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.tableRows.map((row) => (
                    <TableRow key={row.id} className={row.quantity == 0 ? "empty" : parseInt(row.quantity) <= parseInt(row.quantityAlert) ? "danger": null}>
                        <Hidden smDown>
                            <TableCell className={classes.narrowColumn}>{row.id}</TableCell>
                        </Hidden>
                        <Hidden mdDown>
                            <TableCell className={classes.narrowColumn}>
                                <Avatar src={row.image}></Avatar>
                            </TableCell>
                        </Hidden>
                        <TableCell className={classes.removePadding}>
                            {!props.noLink ? <Link to={"/product/" + row.id} className={classes.titleLink}>
                                {row.name}
                            </Link> : row.name}
                        </TableCell>

                        <TableCell className={props.editable ? "hideOnModile" : null}>{row.price}</TableCell>
                        <Hidden mdDown>
                            <TableCell>{row.provider}</TableCell>
                        </Hidden>
                        <TableCell className={props.editable ? "hideOnModile" : null}>{row.quantity}</TableCell>
                        {props.editable ? <TableCell className={classes.mini}>
                            <Input
                                id="adornment-weight"
                                type="number"
                                value={props.type === 'fill' ? row.add :row.remove}
                                onChange={(e) => props.defineProductOrder(e, row.id)}
                                placeholder="0"
                                className={classes.valueInput}
                                endAdornment={<InputAdornment position="end">Sztuk</InputAdornment>}
                                inputProps={{
                                    'aria-label': 'Wydano',
                                }}
                            />
                        </TableCell> : null}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
    </Animation>
  );
};

ProductsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductsTable);
