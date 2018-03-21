import { combineReducers } from 'redux'
import { ADD_SET, DEC_SET,CHANAGE_SET , HTTP_GET,KEYWORD_SET} from '../action'

const initState = {
    num:0,
    keyWord:'',
    list:[]
};

function change_num(state=initState,action) {
    switch (action.type){
        case ADD_SET:
            return Object.assign({},state,action.data);
        case DEC_SET:
            return Object.assign({},state,action.data);
        case CHANAGE_SET:
            return Object.assign({},state, action.data);
        default:
            return state;
    }
}

function getHttpInfo(state=initState,action) {
    switch (action.type){
        case HTTP_GET:
            return Object.assign({},state,action.data);
        case KEYWORD_SET:
            return Object.assign({},state,action.data);
        default:
            return state;
    }
}

export default combineReducers({
    change_num,
    getHttpInfo
})