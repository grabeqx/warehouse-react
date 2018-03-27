import axios from 'axios';

const warehouseActions = {

    getProducts: function(action) {
        return axios.post('/dbCall.php?action=getProducts')
            .then((response) => response.data)
    }
    
}

export default warehouseActions;