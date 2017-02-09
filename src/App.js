import React, { Component } from 'react'; 
import { connect } from 'react-redux' // Connect function at the bottom comes from Redux. It connects our application to Redux. 
import { favouritePokemon, getPokemon } from './actions';

import {PokemonView} from './components/pokemon-view';

// import { GET_ALL_POKEMON_URL } from './constants/api-url';

//https://img.pokemondb.net/artwork/${pokemon}.jpg <-- use for pictures

const mapStateToProps = state => ({ // Returns overall state. Connects state to application.
  pokemon: state.pokemon.list,
});

const mapDispatchToProps = { // Allows access for actions. Connects functions/actions to Redux.
  favouritePokemon,
  getPokemon
};

class App extends Component { // This is the main (parent) component. 
  componentDidMount() {
    this.props.getPokemon();
    console.log(this.props.getPokemon);
  }

  render() {

    const { pokemon } = this.props; // destructuring
    return (

      <div>
        <h1>Pokemon App!</h1>
        <PokemonView favourite={(name) => console.log(name)} pokeData={{name: 'Della', height: '180cm'}} />

        {pokemon.map(poke => <h2 key={poke.name}>{poke.name}</h2>)}

      </div>
      //create PokemonList Here
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 
// Connect function at the bottom comes from Redux. It connects our application to Redux. 
// Very important. Everything goes through it.
// It does not modify the component class passed to it; instead, it returns a new, connected component class for you to use.




// NOTES:

// 1) Actions are called by Redux itself. It will immediately call it and immediately return it. And then head to the reducer. 
// - Async is a problem here though. The reducer is going to get a promise instead of the actual result of the get. 
// - To deal with the asynchronousity, break it up into the get and the set. 
//
// 2) The store is made by the function createStore (imported from Redux). It's passed the reducer. then
// a function combines all the reducers, which is passed into createStore. 
// 
// 3) Redux allows for middleware. Middleware describes special functions that occur at specific times during the regular process
// of how Redux works. If you want to intercept these things in the middle, you use middleware. 
//  
// 4) To make sure the reducer actually gets the intended data, you can make your action use dispatch as a parameter.
// Whatever you pass into dispatch, that gets called in the action. This is an example of a useful thunk.
// - A thunk is anything that hides something else. Usually it's a function hiding another function(s).
// 
// 5) Connect function at the bottom comes from Redux. It connects our application to Redux. Very important. Everything goes through it.
// 
// 6) Reducer listens for every single action. It will do certain things depending on the type of the action. 
// - Important to have a default state for conditions not covered.
// 
// 7) mapStateToProps returns overall state. i.e. I want my local props to equal the overarching redux state. Connects state to application.
// 
// 8) mapDispatchToProps allows access for actions. Connects functions/actions to Redux.
// - watch this.props on your actions 
// 
// 9) Combine reducers combines all reducers into one single object. 
// 
// 10) Overarching state is split up by the reducers. i.e state.pokemon.list is globalState.reducer.initialStateProperty
// 
// 11) Order of firing: constructor, component will mount, render, component did mount



// TESTING:
// 1) expect from chai module is all about language chains to describe the expected result of a test. 
// compares what you expect with what you get.
// - should result in true or false statements 
// i.e. expect(wrapper.find('h2)).to.have.length(1); (since there's only 1 h2 for example)
// 2) in node, type "npm test" to start nodemon-style testing. 
// 
// 3) Enzyme is a library used to specifically test React components.
// - shallow and mount and full rendering api mount
// - shallow is good to test simple dumb components 
// - wtf is shallow's wrapper?! 
// 
// 4) sinon is useful for spy oriented stuff. functions are hard to test. often ... you don't want to know what the function
// results into, you actually want to know it's meta data. sinon lets you wrap or create a fake function with that info for you.
// 
// 
//
// 
// 
//