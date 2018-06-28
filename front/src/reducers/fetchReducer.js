import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SHOW_DATA_BOX
} from '../actions/fetchActions';

const initialState = {
    datas: {},
    loading: false,
    error: null,
    witchOne: 0,
};

export default function datasReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                datas: action.payload.datas
            };

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                datas: []
            };

        case SHOW_DATA_BOX:
            return {
                ...state,
                witchOne :  action.payload.witchOne,   
            }

        default:
            return state;
    }
}