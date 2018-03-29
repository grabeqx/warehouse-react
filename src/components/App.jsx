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
import Fillstate from './FillState';
import ProductComponent from './ProductComponent';

class App extends React.Component {

    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <ConnectedRouter history={history}>
                <Content pageName={this.props.pageName}>
                    <Switch>
                        <Route exact path="/" component={Warehouse} />
                        <Route path="/product/:id" component={ProductComponent} />                        
                        <Route path="/order" component={Order} />
                        <Route path="/report" component={Report} />
                        <Route path="/add" component={AddProduct} />
                        <Route path="/fill" component={Fillstate} />
                        <Route path="/admin" component={AdminPanel} />
                    </Switch>
                </Content>
            </ConnectedRouter>
        )
    }

}

function mapStateToProps(state) {
    return {
        pageName: state.appReducer.pageName
    }
}


export default connect(mapStateToProps, null)(App);