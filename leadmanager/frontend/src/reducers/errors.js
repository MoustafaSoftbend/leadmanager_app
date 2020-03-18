import {GET_ERRORS} from '../actions/types';

const initialState = {
    msg: {},
    status: null,
    loading: true
}

export default function(state=initialState, action) {
    switch(action.type){
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                loading: false
            }
        default:
            return state
    }
}