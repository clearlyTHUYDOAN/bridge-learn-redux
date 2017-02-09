import {ACTION_TYPES} from "../actions/index";

// The reducer below takes in the initial state, an action (consists of type, payload) and returns a new state.

const INITIAL_STATE = {
  list: [],
  favouritePokemon: null
};

export const pokemon = (state = INITIAL_STATE, {type, payload}) => { // this is a reducer. gets exported to reducers/index.js

  switch (type) {
    case ACTION_TYPES.favouritePokemon:
      return {...state, ...{favouritePokemon: payload.pokemon}};

    case ACTION_TYPES.setPokemon:

      return {...state, ...{list: payload.pokemon}};

    default:
      return state;
  }

};