import axios from 'axios';

const warehouseActions = {

    getProducts: function(data) {
        let limitFrom = data.page * data.step;
        return axios.get(`/dbCall.php?action=getProducts&step=${data.step}&limitFrom=${limitFrom}&query=${data.query}`)
            .then((response) => response.data)
    }
    
}

export default warehouseActions;