import $ from 'jquery';

import {GET_ALL_POKEMON_URL} from '../constants/api-url';


export const ACTION_TYPES = {
  favouritePokemon: 'FAVOURITE_POKEMON',
  setPokemon: 'SET_POKEMON'
};

export function favouritePokemon(pokemon) {
  return {
    type: ACTION_TYPES.favouritePokemon,
    payload: {
      pokemon,
    }
  }
}


export function getPokemon() {


  return function (dispatch) {
    $.get(GET_ALL_POKEMON_URL)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.setPokemon,
          payload: {
            pokemon: response.results
          }
        })
      });

  };

}

// To make sure the reducer actually gets the intended data, you can make your action use dispatch as a parameter.
// Whatever you pass into dispatch, that gets called in the action. This is an example of a useful thunk.
// - A thunk is anything that hides something else. Usually it's a function hiding another function(s).
