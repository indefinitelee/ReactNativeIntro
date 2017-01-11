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
import Register from './Register';

export default class Login extends Component {
    linker(comp){
    this.props.navigator.push({
      component:comp
    })
  }
  render() {
    return (
      <Image source={require('./Assets/byop/lin.png')} style={styles.container}>
        <Image source={require('./Assets/byop/logo.png')} resizeMode={'contain'} style={styles.logo}/>

          <TouchableHighlight onPress={this.linker.bind(this, Register)}>
            <View style={styles.bigbutt}></View>
          </TouchableHighlight>
      </Image>
     );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    marginTop: 100,
    width: 100,
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
  bigbutt: {
    backgroundColor: 'rgb(0, 235, 194)',
    width: 300,
    height: 60,
    marginTop: 100,
  },
});

AppRegistry.registerComponent('testcoolapp', () => testcoolapp);

