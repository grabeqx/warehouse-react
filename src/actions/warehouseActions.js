import axios from 'axios';

const warehouseActions = {

    getProducts: function({productPage, productStep, query, filterStart, filterEnd}) {
        let limitFrom = productPage * productStep;
        return axios.get(`/dbCall.php?action=getProducts&step=${productStep}&limitFrom=${limitFrom}&query=${query}&filterStart=${filterStart}&filterEnd=${filterEnd}`)
            .then((response) => response.data);
    },

    getProduct: function(id) {
        console.log(id);
        return axios.get(`/dbCall.php?action=getProduct&id=${id}`)
            .then((response) => response.data[0]);
    }
    
}

export default warehouseActions;