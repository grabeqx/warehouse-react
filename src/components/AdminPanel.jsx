import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

import { changeTitle } from '../actions/actions';
import AddUser from './AddUser';
import RemoveUser from './RemoveUser';
import AdditionalOptions from './AdditionalOptions';

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.changeTitle('Panel administratora');
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <AddUser />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <RemoveUser />
                        </Grid>
                        <Grid item xs={12}>
                            <AdditionalOptions />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title
    }
}

export default connect(mapStateToProps, { changeTitle })(AdminPanel);