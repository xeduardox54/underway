import React, {Component} from 'react';
import {View,Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends Component {
  render() {
    return(
      <View>
        <Text>Hola</Text>
      </View>
    );
  }
}