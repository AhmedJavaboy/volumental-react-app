import initialState from './initialState';
import update from 'immutability-helper'; // 
import {CHANGE_MODEL_COLOR} from '../constants/actionTypes.js';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.


export default function modelColorReducer(state = initialState.objColor, action) {
    let newState;
    switch (action.type) {
        case CHANGE_MODEL_COLOR:
            newState = action.newColor;
            return newState;

        default:
            return state;
    }
}
