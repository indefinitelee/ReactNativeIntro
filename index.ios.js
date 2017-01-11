import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
  Navigator,
} from 'react-native';
import Login from './Login'

export default class testcoolapp extends Component {

  renderScene(route, navigator) {
    return <route.component navigator={navigator} props={route.passProps} />
  }

  render() {
    return (
      <Navigator
        initialRoute={ {component: Login} }
        renderScene={this.renderScene}
      />
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
