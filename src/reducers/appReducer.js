import CONFIG from '../constants/config';

const appReducer = (state = {
    userName: CONFIG.USER,
    pageName: 'Warehouse'
}, action) => {
    switch(action.type) {


        default:
            return state;
    }
}


export default appReducer;