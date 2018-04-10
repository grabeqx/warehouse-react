import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Fade from 'material-ui/transitions/Fade';

import { HTMLtoPDF } from '../utils/utils';
import { changeTitle, getDayOrders, getWeekOrders, getMonthOrders, getProducts, getProductsState } from '../actions/actions';
import RaportTabs from '../containers/RaportTabs';
import RaportTable from '../containers/RaportTable';
import FabButton from '../containers/FabButton';
import FileDownload from 'material-ui-icons/FileDownload';

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: this.props.orders,
            tabValue: 0,
            products: [],
            ordersLabels: ['Nazwa zlecenia', 'Data', 'Produkty'],
            productsLabels: ['Id', 'Nazwa', 'Ilość']
        };
        this.handleChange = this.handleChange.bind(this);
        this.downloadPdf = this.downloadPdf.bind(this);

        this.actions = [
            this.props.getDayOrders,
            this.props.getWeekOrders,
            this.props.getMonthOrders,
            this.props.getProductsState
        ];
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            orders: nextProps.orders,
            products: nextProps.products,
        })
    }

    componentDidMount() {
        this.props.changeTitle('Raporty');
        this.props.getDayOrders();
    }

    handleChange(event, value) {
        this.setState({
            tabValue: value
        }, () => this.actions[value]())
    }

    downloadPdf() {
        HTMLtoPDF();
    }

    render() {
        return (
            <React.Fragment>
                <RaportTabs 
                    value={this.state.tabValue}
                    onChange={this.handleChange}
                    visible={true}
                    animationType={Fade}
                /> 
                {this.state.orders.length > 0 ?
                    <RaportTable 
                        orders={this.state.orders}
                        labels={this.state.ordersLabels}
                        visible={true}
                        animationType={Fade}
                    /> : 
                    <RaportTable 
                        products={this.state.products}
                        labels={this.state.productsLabels}
                        visible={true}
                        animationType={Fade}
                    />}
                    <FabButton 
                        onClick={this.downloadPdf} 
                        visible={true}
                        animationType={Fade}
                        icon={FileDownload}
                        color="primary"
                    />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        orders: state.raportReducer.orders,
        products: state.raportReducer.products
    }
}

export default connect(mapStateToProps, { changeTitle, getDayOrders, getWeekOrders, getMonthOrders, getProducts, getProductsState })(Report);