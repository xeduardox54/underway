import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { AddService } from './App/pages/AddService';
import Cargas from './App/components/cargas';

export default class App extends Component {

  render() {

    const datos = [
      {
        destino: 'Arequipa',
        dni: '76394311',
        material: 'Origamis',
        precio: '150',
        ubicacion: 'Lima',
      }
    ];

    const Stack = createStackNavigator();

    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Underway" component={Cargas}/>
          <Stack.Screen name="Formulario" component={AddService} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}