import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { AddService } from './app/pages/AddService';
import Cargas from './app/components/cargas';

export default class App extends Component {
  render() {

    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Underway" component={Cargas} />
          <Stack.Screen name="Formulario" component={AddService} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
