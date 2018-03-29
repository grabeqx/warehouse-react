import CONFIG from '../constants/config';
import ACTIONS from '../constants/actions';

const appReducer = (state = {
    userName: CONFIG.USER,
    userId: CONFIG.USER_ID,
    title: ''
}, action) => {
    switch(action.type) {
        
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