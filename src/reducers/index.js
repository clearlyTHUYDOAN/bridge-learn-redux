import { combineReducers } from 'redux';
import {pokemon} from "./pokemon";


export default combineReducers({
  pokemon, // this is the reducer from pokemon.js
  // you would list all the reducers you have here if you want to combine them
});

// Combine reducers combines all reducers into one single object.
// Reducers take in the current state and an action and returns a new state. 
