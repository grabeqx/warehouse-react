import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

const styles = theme => ({
    userName: {
        marginLeft: 5,
        marginRight: 15,
        textTransform: 'uppercase',
        fontSize: 14,
        lineHeight: '1.8em',
        fontWeight: 500
    },
    dflex: {
        display: 'flex',
        aliginItems: 'center'
    }
});

const UserInfo = (props) => (
    <div className={props.classes.dflex}>
        <AccountCircle />
        <Typography variant="subheading" color="inherit" noWrap className={props.classes.userName}>
            {props.user}
        </Typography>
    </div>
)

function mapStateToProps(state) {
    return {
        user: state.appReducer.userName
    }
}

UserInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles),connect(mapStateToProps, null))(UserInfo);