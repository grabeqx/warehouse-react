import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../stores/AppStore';

import Content from '../containers/Content';
import Warehouse from './Warehouse';
import Report from './Report';
import AddProduct from './AddProduct';
import AdminPanel from './AdminPanel';
import Order from './Order';
import FillStore from './FillStore';
import ProductComponent from './ProductComponent';
import Notify from './Notify';

import { getConfig } from '../actions/actions';

class App extends React.Component {
    constructor(props) {
        super(props);       
    }

    componentDidMount() {
        this.props.getConfig();
    }

    render() {
        return (
            <ConnectedRouter history={history}>
            <div id="main-content">
                <Content pageName={this.props.pageName}>
                    <Switch>
                        <Route exact path="/" component={Warehouse} />
                        <Route path="/product/:id" component={ProductComponent} />                        
                        <Route path="/order" component={Order} />
                        <Route path="/report" component={Report} />
                        <Route path="/add" component={AddProduct} />
                        <Route path="/fill" component={FillStore} />
                        <Route path="/admin" component={AdminPanel} />
                    </Switch>
                    <Notify />
                </Content>
            </div>
            </ConnectedRouter>
        )
    }

}

function mapStateToProps(state) {
    return {
        pageName: state.appReducer.pageName
    }
}


export default connect(mapStateToProps, { getConfig })(App);