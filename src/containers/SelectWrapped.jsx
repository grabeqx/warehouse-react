import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import CancelIcon from 'material-ui-icons/Cancel';
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp';
import ClearIcon from 'material-ui-icons/Clear';
import Chip from 'material-ui/Chip';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Option from '../components/Option';

const styles = theme => ({
        root: {
        flexGrow: 1,
        height: 250,
    },
    chip: {
        margin: theme.spacing.unit / 4,
    }
});

function SelectWrapped(props) {
    const { classes, ...other } = props;
  
    return (
        <Select
            optionComponent={Option}
            noResultsText={<Typography>{'Nie znaleziono'}</Typography>}
            arrowRenderer={arrowProps => {
                return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
            }}
            clearRenderer={() => <ClearIcon />}
            valueComponent={valueProps => {
                const { value, children, onRemove } = valueProps;

                const onDelete = event => {
                    event.preventDefault();
                    event.stopPropagation();
                    onRemove(value);
                };

                if (onRemove) {
                return (
                    <Chip
                        tabIndex={-1}
                        label={children}
                        className={classes.chip}
                        deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
                        onDelete={onDelete}
                    />
                );
                }

                return <div className="Select-value">{children}</div>;
            }}
            {...other}
        />
    );
  }

  SelectWrapped.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SelectWrapped);