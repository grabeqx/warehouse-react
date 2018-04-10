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

    addProduct: function({image, name, price, quantity, quantityAlert, provider}) {
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
                return axios.post("/dbCall.php", {addProduct: true, name, price, quantity, quantityAlert, provider, image: image})
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
                date: payload.date,
                productsIds: payload.productsIds,
                type: payload.type,
                name: payload.name
            })
            .then((response) => {
                return 'Zapisano zlecenie'
            })
    },

    getProductOrders: function(id) {
        return axios.get(`/dbCall.php?action=getProductOrders&productId=${id}`)
            .then((response) => response.data);
    },

    getDayOrders: function() {
        return axios.get(`/dbCall.php?action=getDayOrders`)
            .then((response) => response.data);
    },

    getWeekOrders: function() {
        return axios.get(`/dbCall.php?action=getWeekOrders`)
            .then((response) => response.data);
    },

    getMonthOrders: function() {
        return axios.get(`/dbCall.php?action=getMonthOrders`)
            .then((response) => response.data);
    },

    getProductsState: function() {
        return axios.get(`/dbCall.php?action=getProductsState`)
            .then((response) => response.data);
    },

    getConfig: function() {
        return axios.get(`/dbCall.php?action=getConfig`)
            .then((response) => response.data[0]);
    },

    getUsers: function() {
        return axios.get(`/dbCall.php?action=getUsers`)
            .then((response) => response.data);
    },

    addUser: function(payload) {
        return axios.post("/dbCall.php", {
                addUser: true, 
                username: payload.username,
                email: payload.email,
                password: payload.password,
                isAdmin: parseInt(payload.isAdmin)
            })
            .then((response) => {
                return 'Dodano użytkownika'
            })
    },

    removeUser: function(payload) {
        return axios.post("/dbCall.php", {
                removeUser: true,
                userId: payload
            })
            .then((response) => {
                return 'Usunięto użytkownika'
            })
    },

    saveConfig: function(payload) {
        return axios.post("/dbCall.php", {
                saveConfig: true,
                productAlert: payload.productAlert
            })
            .then((response) => {
                return 'Zmodyfikowano'
            })
    },

    removeProduct: function(payload) {
        return axios.post("/dbCall.php", {
                removeProduct: true,
                productId: payload.productId
            })
            .then((response) => {
                return 'Usunięto'
            })
    },

    updateProduct: function({image, name, price, quantity, quantityAlert, id, provider}) {
        if(typeof image !== 'string') {
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
                    return axios.post("/dbCall.php", {updateProduct: true, name, price, quantity, quantityAlert, id, provider, image: '/'+image})
                        .then((response) => {
                            return 'Uaktualniono produkt';
                        })
                });
        } else {
            return axios.post("/dbCall.php", {updateProduct: true, name, price, quantity, quantityAlert, id, provider, image: image})
                .then((response) => {
                    return 'Uaktualniono produkt';
                })
        }
    },
    
}

export default warehouseActions;