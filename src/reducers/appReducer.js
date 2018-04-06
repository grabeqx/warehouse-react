import CONFIG from '../constants/config';
import ACTIONS from '../constants/actions';

const appReducer = (state = {
    userName: CONFIG.USER,
    userId: CONFIG.USER_ID,
    isAdmin: CONFIG.IS_ADMIN,
    title: '',
    addLoader: 0,
    notify: false,
    notifyText: '',
    users: [],
    config: {}
}, action) => {
    switch(action.type) {
        
        case ACTIONS.ADD_PRODUCT:
        case ACTIONS.SAVE_ORDER:
        case ACTIONS.ADD_USER:
        case ACTIONS.REMOVE_USER:
        case ACTIONS.SAVE_CONFIG:
            return {
                ...state,
                addLoader: 1
            }
        case ACTIONS.ADD_PRODUCT_SUCCESS:
        case ACTIONS.SAVE_ORDER_SUCCESS:
        case ACTIONS.ADD_USER_SUCCESS:
        case ACTIONS.REMOVE_USER_SUCCESS:
        case ACTIONS.SAVE_CONFIG_SUCCESS:
        case ACTIONS.NOTIFY_USER:
        case ACTIONS.REMOVE_PRODUCT_SUCCESS:
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
        case ACTIONS.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users
            }
        default:
            return state;
    }
}


export default appReducer;