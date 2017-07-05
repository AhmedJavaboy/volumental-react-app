import * as types from '../constants/actionTypes';


// example of a thunk using the redux-thunk middleware
export function chanageModelColor(newColor) {
    return function (dispatch) {
        return dispatch({
            type: types.CHANGE_MODEL_COLOR ,newColor
        });
    };
}
