import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class Register extends Component {

  linker(comp){
    this.props.navigator.push({
      component:comp
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.linker}>
          <View style={styles.bigButt}>
            <Text>This is the register page</Text>
          </View>
        </TouchableHighlight>
      </View>
     );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    bigbutt: {
    backgroundColor: 'rgb(0, 235, 194)',
    width: 300,
    height: 60,
    marginTop: 300,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('testcoolapp', () => testcoolapp);

