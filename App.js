import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AddService } from './app/pages/AddService';
import Cargas from './app/components/Cargas/cargas';
import Pedidos from './app/components/Pedidos/Pedidos';
import Details from './app/components/Detalles/Details';
import Mapa from './app/components/Mapa/Mapa';
import SingIn from './app/components/SingIn/SingIn';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SingIn">
          <Stack.Screen name="Pedidos" component={Pedidos} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="SingIn" component={SingIn} />
          <Stack.Screen name="Mapas" component={Mapa} />
          <Stack.Screen name="Underway" component={Cargas} />
          <Stack.Screen name="Formulario" component={AddService} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
