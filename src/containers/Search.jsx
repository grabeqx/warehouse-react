import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import purple from "material-ui/colors/purple";
import { FormControl } from "material-ui/Form";
import Grid from 'material-ui/Grid';
import Search from 'material-ui-icons/Search';

import Filter from './Filter';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        width: "100%"
    },
    inputLabelFocused: {
        color: purple[500]
    },
    inputUnderline: {
        "&:after": {
        backgroundColor: purple[500]
        }
    }
});

const SearchContainer = (props) => {
    const { classes } = props;
    return (
        <div>
            <Grid container spacing={24}>
                <Grid item xs={8}>
                    <FormControl className={classes.formControl}>
                        <InputLabel
                            FormControlClasses={{focused: classes.inputLabelFocused}}
                            htmlFor="custom-color-input"
                        >
                            Szukaj
                        </InputLabel>
                        <Input
                            classes={{underline: classes.inputUnderline}}
                            endAdornment = {<Search />}
                        />
                    </FormControl>
                </Grid>
                <Grid item container xs={4}>
                    <Grid item xs={6}>
                        <Filter fieldName="Podaj ilość" inputStartText="Od" />
                    </Grid>
                    <Grid item xs={6}>
                        <Filter fieldName="Podaj ilość" inputStartText="Do" />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

SearchContainer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchContainer);