import Meteor, {
  connectMeteor,
  MeteorComplexListView
} from 'react-native-meteor';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


import PokemonItem from './PokemonItem';
import ToggleType from './ToggleType';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    height: 100,
    flex: 5,
    alignSelf: 'stretch'
  },
  buttonContainer: {
    //backgroundColor: "green",
    alignSelf: 'stretch',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});



let types = [{
  type: 'fire',
  color: "#f55"
}, {
  type: 'water',
  color: '#55f'
}, {
  type: 'grass',
  color: '#9f0'
}]

let clickCounter = 0;


@connectMeteor
export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentType: types[0]
    }
  }

  getMeteorData() {
    return {
      pokemons: Meteor.collection('pokemons').find()
    }
  }
  componentWillMount() {
    const url = 'http://192.168.1.30:3000/websocket';
    Meteor.connect(url);
  }

  startMeteorSubscriptions() {
    Meteor.subscribe('pokemons', this.state.currentType.type);
  }

  _handlePress() {
    clickCounter++;
    console.log(this.data.pokemons);
    this.setState({
      currentType: types[clickCounter % 3]
    })
  }

  pokemons() {
    return Meteor.collection('pokemons').find({
      type: this.state.currentType.type
    });
  }

  renderItem(item) {
    return ( 
      <PokemonItem image={item.image} name={item.name} _id={item._id} />
    );
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <MeteorComplexListView
            elements={this.pokemons.bind(this)}
            renderRow={this.renderItem} />
        </View>

        <View style={styles.buttonContainer}>
          <ToggleType color={this.state.currentType.color} _handlePress={this._handlePress.bind(this)} text={this.capitalize(this.state.currentType.type)}/>
        </View>
      </View>
    );
  }
}