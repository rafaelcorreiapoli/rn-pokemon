//  import Router from 'react-native-router';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';


import ScrollableTabView from 'react-native-scrollable-tab-view';
import PokemonList from './PokemonList'

/*let firstRoute = {
  name: 'Welcome!',
  component: MainView
}*/

export default class MainView extends Component {
  render() {
    return (
    <ScrollableTabView>
      <PokemonList tabLabel="Pokemons" />
      <PokemonList tabLabel="Pokemons2" />
      <PokemonList tabLabel="Pokemons3" />
    </ScrollableTabView>    
    )
  }
}

/*export default class App extends Component {
  render() {
    <Router firstRoute={firstRoute} />
  }
}*/