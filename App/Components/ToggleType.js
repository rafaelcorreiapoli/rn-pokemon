import React, {
  Component,
  StyleSheet
} from 'react-native';

import Button from 'react-native-button';

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    height: 45,
    width: 100,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'red'
  },
  contentStyle: {
    fontSize: 20,
    color: 'white'
  },
  disabledStyle: {
    color: 'red'
  }
})


export default class ToggleType extends Component {
  render() {
    return (
      <Button
        containerStyle={[styles.containerStyle, {backgroundColor: this.props.color}]}
        style={styles.contentStyle}
        styleDisabled={styles.disabledStyle}
        onPress={this.props._handlePress.bind(this)}>
        {this.props.text}
      </Button>
    );
  }
}
