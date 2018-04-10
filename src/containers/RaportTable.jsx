import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Hidden from 'material-ui/Hidden';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,  
    },
});

const RaportTable = (props) => {
    const {classes} = props;
    const Animation = props.animationType;
    return (
        <Animation in={props.visible}>
            <Paper>
                <Table id="print" className={props.products ? 'raportProducts' : 'raportTable'}>
                    <TableHead>
                    <TableRow>
                        {props.labels.map((label, index) => (
                            <TableCell key={index}>{label}</TableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.orders && props.orders.map(order => {
                        let products = JSON.parse(order.products);
                        return (
                            <TableRow key={order.id}>
                                <TableCell>{order.name}</TableCell>
                                <Hidden mdDown>
                                    <TableCell>{order.date}</TableCell>
                                </Hidden>
                                <TableCell>
                                    {products.map((product) => (
                                        <p key={product.id}><strong>{product.name}</strong> - {product.remove}<br/></p>
                                    ))}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                    {props.products && props.products.map(product => {
                        return (
                            <TableRow key={product.id}>
                                <Hidden mdDown>
                                    <TableCell>{product.id}</TableCell>
                                </Hidden>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{props.singleOrder ? product.remove : product.quantity}</TableCell>
                            </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
            </Paper>
        </Animation>
    )
}

RaportTable.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(RaportTable);