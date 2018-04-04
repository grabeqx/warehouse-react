import CONFIG from '../constants/config';
import ACTIONS from '../constants/actions';

const appReducer = (state = {
    userName: CONFIG.USER,
    userId: CONFIG.USER_ID,
    title: '',
    addLoader: 0
}, action) => {
    switch(action.type) {
        
        case ACTIONS.ADD_PRODUCT:
        case ACTIONS.SAVE_ORDER:
            return {
                ...state,
                addLoader: 1
            }
        case ACTIONS.ADD_PRODUCT_SUCCESS:
        case ACTIONS.SAVE_ORDER_SUCCESS:
            return {
                ...state,
                addLoader: 0
            }
        case ACTIONS.CHANGE_TITLE:
            return {
                ...state,
                title: action.payload.title
            }
        default:
            return state;
    }
}


export default appReducer;