import axios from 'axios';

const warehouseActions = {

    getProducts: function({productPage, productStep, query, filterStart, filterEnd}) {
        let limitFrom = productPage * productStep;
        return axios.get(`/dbCall.php?action=getProducts&step=${productStep}&limitFrom=${limitFrom}&query=${query}&filterStart=${filterStart}&filterEnd=${filterEnd}`)
            .then((response) => response.data);
    },

    getProduct: function(id) {
        return axios.get(`/dbCall.php?action=getProduct&id=${id}`)
            .then((response) => response.data[0]);
    },

    addProduct: function({image, name, price, quantity}) {
        const url = '/upload.php';
        const formData = new FormData();
        formData.append('image',image)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData,config)
            .then((response) => {
                const image = response.data.length > 0 ? response.data : 'uploads/brak.jpg';
                return axios.post("/dbCall.php", {addProduct: true, name, price, quantity, image: image})
                    .then((response) => {
                        return 'Dodano produkt';
                    })
            });
    },

    getOrderProduct: function(query) {
        return axios.get(`/dbCall.php?action=getOrderProduct&query=${query}`)
            .then((response) => response.data);
    },

    saveOrder: function(products) {
        return axios.post("/dbCall.php", {saveOrder: true, products})
            .then((response) => {
                return 'Zapisano zlecenie'
            })
    },

    addOrder: function(payload) {
        return axios.post("/dbCall.php", {
                addOrder: true, 
                userId: payload.userId, 
                products: JSON.stringify(payload.products),
                date: payload.date
            })
            .then((response) => {
                return 'Zapisano zlecenie'
            })
    }
    
}

export default warehouseActions;