import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  image: {
    width: 50, 
    height:50,
    resizeMode: 'stretch'
  },
  text: {
    marginLeft: 10
  }
});

export default class PokemonItem extends Component {
  render() {
    return (
      <View key={this.props._id} style={styles.container} >
        <Image source={{uri: this.props.image}} style={styles.image} />
        <Text style={styles.text}>
         {this.props.name} 
        </Text> 
      </View>    
    )
  }  
}