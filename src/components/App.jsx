import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Router, Route, browserHistory } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../stores/AppStore';
import { connect } from 'react-redux';

import Content from '../containers/Content';
import Warehouse from './Warehouse';
import Report from './Report';
import AddProduct from './AddProduct';
import AdminPanel from './AdminPanel';
import Order from './Order';
import Fillstate from './FillState';

class App extends React.Component {

    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <Router history={history}>
                <Content pageName={this.props.pageName}>
                    <Switch>
                        <Route exact path="/" component={Warehouse} />
                        <Route exact path="/order" component={Order} />
                        <Route path="/report" component={Report} />
                        <Route path="/add" component={AddProduct} />
                        <Route path="/fill" component={Fillstate} />
                        <Route path="/admin" component={AdminPanel} />
                    </Switch>
                </Content>
            </Router>
        )
    }

}

function mapStateToProps(state) {
    return {
        pageName: state.appReducer.pageName
    }
}


export default connect(mapStateToProps, null)(App);