import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cargas from './App/components/cargas';

export default class App extends Component {

  render() {

    const Stack = createStackNavigator();

    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Underway" component={Cargas} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}