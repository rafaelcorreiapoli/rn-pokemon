import Router from 'react-native-simple-router';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text,
  PropTypes,
  TouchableHighlight
} from 'react-native';


import ScrollableTabView from 'react-native-scrollable-tab-view';
import PokemonList from './PokemonList';
import NewPokemon from './NewPokemon';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFC107',
  },
  headerTitle: {
    color: '#536DFE'
  }
});

class MainView extends Component {
  render() {
    return (
    <ScrollableTabView tabBarBackgroundColor='#FFC107' tabBarActiveTextColor='#536DFE' tabBarInactiveTextColor='#536DFE'>
      <PokemonList tabLabel="Pokesmons" />
      <PokemonList tabLabel="Pokemons2" />
      <PokemonList tabLabel="Pokemons3" />
    </ScrollableTabView>    
    )
  }
}


const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class AddButton extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick() {
    this.props.toRoute({
      name: "New Pokemon",
      component: NewPokemon
    });
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this._handleClick}>
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
AddButton.propTypes = propTypes;

let firstRoute = {
  name: 'Pokemon!',
  component: MainView,
  rightCorner: AddButton
}


export default class App extends Component {
  render() {
    return ( 
        <Router 
          firstRoute={firstRoute} 
          headerStyle={styles.header}
          titleStyle={styles.headerTitle} />
      
    );
  }
}