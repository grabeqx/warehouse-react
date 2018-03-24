import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Router, Route, browserHistory } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../stores/AppStore';
import { connect } from 'react-redux';

import Layout from './Layout';
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
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Warehouse} />
                        <Route exact path="/order" component={Order} />
                        <Route path="/report" component={Report} />
                        <Route path="/add" component={AddProduct} />
                        <Route path="/fill" component={Fillstate} />
                        <Route path="/admin" component={AdminPanel} />
                    </Switch>
                </Layout>
            </Router>
        )
    }

}


export default App;