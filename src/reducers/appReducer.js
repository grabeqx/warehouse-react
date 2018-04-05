import CONFIG from '../constants/config';
import ACTIONS from '../constants/actions';

const appReducer = (state = {
    userName: CONFIG.USER,
    userId: CONFIG.USER_ID,
    title: '',
    addLoader: 0,
    notify: false,
    notifyText: ''
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
                addLoader: 0,
                notify: true,
                notifyText: action.payload.status
            }
        case ACTIONS.CHANGE_TITLE:
            return {
                ...state,
                title: action.payload.title
            }
        case ACTIONS.CLOSE_NOTIFY:
            return {
                ...state,
                notify: false,
                notifyText: ''
            }
        default:
            return state;
    }
}


export default appReducer;