import * as types from '../types';

const initialState = {
    names: []
};

function rootReducer(state = initialState, action) {
    if (action.type === types.ADD_NAME) {
        return Object.assign({}, state, {
            names: state.names.concat(action.payload)
        });
    }

    return state;
};

export default rootReducer;