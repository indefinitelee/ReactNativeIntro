import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class testcoolapp extends Component {

  clickedme(){
    alert("ouch");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.clickedme} underlayColor={'transparent'}>
          <View style={styles.circle}>
            <Text style={styles.inner}>Hi</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rebeccapurple',
  },
  circle: {
    backgroundColor: "red",
    height: 200,
    width: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    fontSize: 42,
    color: "white",
    fontWeight: '400',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('testcoolapp', () => testcoolapp);
