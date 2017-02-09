import { combineReducers } from 'redux';
import {pokemon} from "./pokemon";


export default combineReducers({
  pokemon,
});

// Combine reducers combines all reducers into one single object.
// Reducers take in the current state and an action and returns a new state. 
